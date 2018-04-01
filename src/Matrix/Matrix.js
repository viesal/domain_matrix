import {MatrixElement} from './MatrixElement';
import {getRandomColor} from '../utils/getRandomColor';

export class Matrix {
    constructor(container) {
        this.container = container;

        this.matrix = document.createElement('table');
        this.thead = document.createElement('thead');
        this.tbody = document.createElement('tbody');
        this.thead__title = document.createElement('tr');

        this.container.appendChild(this.matrix);
        this.matrix.appendChild(this.thead);
        this.matrix.appendChild(this.tbody);
        this.thead.appendChild(this.thead__title);

        this.countDomen = 0;
    }

    create_matrix(width, height) {
        this.thead__title.innerHTML = '';
        this.tbody.innerHTML = '';
        for (let rowNumber = 0; rowNumber < height; rowNumber++) {
            let tr = document.createElement('tr');
            this.tbody.appendChild(tr);
            for (let columnNumber = 0; columnNumber <= width; columnNumber++) {
                if (rowNumber === 0) {
                    let th = document.createElement('th');
                    th.innerText = columnNumber;
                    if (columnNumber === 0) {
                        th.innerText = '#';
                    }
                    this.thead__title.appendChild(th);
                }
                if (columnNumber === 0) {
                    let th = document.createElement('th');
                    th.innerText = rowNumber + 1;
                    tr.appendChild(th)
                }
                else {
                    new MatrixElement(tr);
                }
            }
        }
    }

    _getArray() {
        const values = [...this.tbody.querySelectorAll('tr')].map((tr) => {
            return [...tr.querySelectorAll('td')].map((td) => {
                return Number(td.innerHTML);
            })
        });
        return values;
    }

    _fill(data, x, y) {
        let dom = [];
        const flow = function (x, y) {
            if (x >= 0 && y < data.length && y >= 0 && x < data[y].length) {
                if (Number(data[y][x]) === 1) {
                    data[y][x] = 0;
                    dom.push({x: x, y: y});
                    flow(x - 1, y);
                    flow(x + 1, y);
                    flow(x, y - 1);
                    flow(x, y + 1);
                }
            }
        };
        flow(x, y);
        if (dom.length > 0) {
            return dom
        }
    }

    _findDomains() {
        this.countDomen = 0;
        const domains = [];
        const arr = this._getArray();
        for (const rowNumber in arr) {
            for (const columnNumber in arr[rowNumber]) {
                if (Number(arr[rowNumber][columnNumber]) === 1) {
                    domains.push(this._fill(arr, parseInt(columnNumber), parseInt(rowNumber)));
                    this.countDomen++;
                }
            }
        }
        return domains
    }

    showDomains() {
        const domains = this._findDomains();
        const tdArray = [...this.tbody.querySelectorAll('tr')].map((tr) => {
            return [...tr.querySelectorAll('td')].map((td) => {
                return td;
            })
        });
        for (const domain of domains) {
            const color = getRandomColor();
            for (const elementDomain of domain) {
                tdArray[elementDomain.y][elementDomain.x].style.backgroundColor = color;
            }
        }
    }

    removeBackgroun() {
        [...this.tbody.querySelectorAll('tr')].map((tr) => {
            [...tr.querySelectorAll('td')].map((td) => {
                td.style.backgroundColor = '#ffffff';
            })
        });
    }

    fillMatrix(chance) {
        const tdList = this.tbody.querySelectorAll('td');
        for (const td of tdList) {
            const random = Math.random();
            if (random <= chance) {
                td.innerText = 1;
            }
            else {
                td.innerText = 0;
            }
        }
    }
}
