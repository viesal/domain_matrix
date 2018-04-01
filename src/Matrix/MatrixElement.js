export class MatrixElement {
    constructor(container) {
        this.container = container;
        this.element = document.createElement('td');
        this.element.innerHTML = '0';
        this.element.className = 'unselectable cursor-default';
        this.element.style.cursor = 'default';
        this.element.style.paddingLeft = '5px';

        this.container.appendChild(this.element);
        this.element.addEventListener('click', () => {
            this.change();
        })
    }

    change() {
        if (this.element.innerText === '1') {
            this.element.innerText = 0;
        }
        else {
            this.element.innerText = 1;
        }
    }
}
