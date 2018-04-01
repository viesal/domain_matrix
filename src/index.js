import {Matrix} from './Matrix/Matrix';
import {Table} from './Table/Table';
import {createElement} from "./utils/createElement";
import {validateChance} from "./utils/validateElement";
import {validateSizeMatrix} from "./utils/validateElement";
import './style.css';

window.onload = () => {
    const controlPanel = createElement(document.body, 'div', 'controlPanel');
    const controlPanelInputs = createElement(controlPanel, 'div', 'controlPanel__group');
    const controlPanelButtons = createElement(controlPanel, 'div', 'controlPanel__group');

    const domenCount = createElement(document.body, 'div');
    domenCount.innerText = 'Колличество доменов: ';
    const span = createElement(domenCount, 'span');

    const divMatrix = createElement(document.body, 'div');
    const divTable = createElement(document.body, 'div');
    const matrix = new Matrix(divMatrix);
    const table = new Table(divTable);

    const inputWidthMatrix = createElement(controlPanelInputs, 'input', 'controlPanel__element');
    inputWidthMatrix.type = 'number';
    inputWidthMatrix.min = 1;
    inputWidthMatrix.max = 40;
    inputWidthMatrix.step = 1;
    inputWidthMatrix.value = 1;
    inputWidthMatrix.addEventListener('change', () => {
        validateSizeMatrix(inputWidthMatrix)
    });

    const inputHeightMatrix = createElement(controlPanelInputs, 'input', 'controlPanel__element');
    inputHeightMatrix.type = 'number';
    inputHeightMatrix.min = 1;
    inputHeightMatrix.max = 40;
    inputHeightMatrix.step = 1;
    inputHeightMatrix.value = 1;
    inputHeightMatrix.addEventListener('change', () => {
        validateSizeMatrix(inputHeightMatrix)
    });

    const inputChance = createElement(controlPanelInputs, 'input', 'controlPanel__element');
    inputChance.type = 'number';
    inputChance.min = 0.01;
    inputChance.max = 0.99;
    inputChance.step = 0.01;
    inputChance.value = 0.5;
    inputChance.addEventListener('change', () => {
        validateChance(inputChance)
    });

    const buttonCreateMatrix = createElement(controlPanelButtons, 'button', 'controlPanel__element');
    buttonCreateMatrix.innerText = 'Создать матрицу';
    buttonCreateMatrix.addEventListener('click', () => {
        matrix.create_matrix(inputWidthMatrix.value, inputHeightMatrix.value);
        if (table.table.innerHTML === '') {
            table.createTitle()
        }
    });


    const buttonFindDomains = createElement(controlPanelButtons, 'button', 'controlPanel__element');
    buttonFindDomains.innerText = 'Посчитать домены';
    buttonFindDomains.addEventListener('click', () => {
        matrix.removeBackgroun();
        matrix.showDomains();
        table.addRow(inputChance.value, matrix.countDomen, `${inputWidthMatrix.value}*${inputHeightMatrix.value}`);
        span.innerText = matrix.countDomen;
    });

    const buttonFillMatrix = createElement(controlPanelButtons, 'button', 'controlPanel__element');
    buttonFillMatrix.innerText = 'АВТО';
    buttonFillMatrix.addEventListener('click', () => {
        matrix.removeBackgroun();
        matrix.fillMatrix(inputChance.value);
        matrix.showDomains();
        table.addRow(inputChance.value, matrix.countDomen, `${inputWidthMatrix.value}*${inputHeightMatrix.value}`);
        span.innerText = matrix.countDomen;
    });
};