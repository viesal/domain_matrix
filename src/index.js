import Matrix from './Matrix';
import './style.css';

window.onload = ()=>{
    let matrix = new Matrix(document.body);
    matrix.create_matrix(10, 10);

    let button_find_domains = document.createElement('button')
    button_find_domains.innerHTML = 'Создать список доменов';
    button_find_domains.addEventListener('click', ()=>{
        matrix.find_domains();
    });

    let button_fill_matrix = document.createElement('button')
    button_fill_matrix.innerHTML = 'Заполнить матрицу';

    document.body.appendChild(button_find_domains)

};