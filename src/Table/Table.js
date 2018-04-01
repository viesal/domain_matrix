export class Table {
    constructor(container) {
        this.container = container;

        this.table = document.createElement('table');
        this.table.className = 'table';

        this.container.appendChild(this.table);
    }

    createTitle() {
        this.thead = document.createElement('thead');
        this.tbody = document.createElement('tbody');
        this.tableTitle = document.createElement('tr');
        this.tableTitle.className = 'table__tr';

        this.columnChance = document.createElement('th');
        this.columnChance.innerText = 'Вероятность';
        this.columnChance.className = 'table__td';

        this.numberDomens = document.createElement('th');
        this.numberDomens.innerText = 'Количество доменов в матрице';
        this.numberDomens.className = 'table__td';

        this.sizeMatrix = document.createElement('th');
        this.sizeMatrix.innerText = 'Количество ячеек в матрице (N*M)';
        this.sizeMatrix.className = 'table__td';

        this.table.appendChild(this.thead);
        this.table.appendChild(this.tbody);
        this.thead.appendChild(this.tableTitle);
        this.tableTitle.appendChild(this.columnChance);
        this.tableTitle.appendChild(this.numberDomens);
        this.tableTitle.appendChild(this.sizeMatrix);

    }

    addRow(columnChance, numberDomens, sizeMatrix) {
        if (this.tbody.childNodes.length === 10) {
            this.tbody.childNodes[0].remove()
        }
        const tr = document.createElement('tr');
        tr.className = 'table__tr';

        const chance = document.createElement('td');
        chance.className = 'table__td';
        chance.innerText = columnChance;

        const domens = document.createElement('td');
        domens.className = 'table__td';
        domens.innerText = numberDomens;

        const matrix = document.createElement('td');
        matrix.className = 'table__td';
        matrix.innerText = sizeMatrix;

        tr.appendChild(chance);
        tr.appendChild(domens);
        tr.appendChild(matrix);

        this.tbody.appendChild(tr);
    }
}