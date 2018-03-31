import Matrix__element from './Matrix__element';

class Matrix{
    constructor(container){
        this.container = container;
        this.matrix = document.createElement('div');

        this.container.appendChild(this.matrix);
        this.domains = []
    }

    create_matrix(width, height){
        for (let h=0; h<height; h++){
            let str = document.createElement('div');
            str.className = 'row';
            for (let w=0; w<width; w++){
                let el = new Matrix__element(str, h, w)
            }
            this.matrix.appendChild(str)
        }
    }

    check4true(x, y){
        return this.matrix.childNodes[y].childNodes[x].innerHTML == 1
    }

    get_arr(){
        let arr = []
        for (let str of this.matrix.childNodes){
            let row = []
            for (let item of str.childNodes){
                row.push(parseInt(item.innerHTML));
            }
            arr.push(row);
        }
        return arr;
    }

    fill(data, x, y, newValue) {
       let dom = [];
        let flow = function(x,y) {
            if (x >= 0 && y < data.length && y >= 0 && x < data[y].length) {
                if (data[y][x] == 1) {
                    data[y][x] = 0;
                    let coords = `(${x+1},${y+1})`;
                    dom.push(coords);
                    flow(x-1, y);
                    flow(x+1, y);
                    flow(x, y-1);
                    flow(x, y+1);
                }
            }
        };
        flow(x,y);
        if (dom.length>0){
            this.domains.push(dom)
        }

    }

    find_domains(){
        let arr = this.get_arr()
        for (let i in arr){
            for (let j in arr[i]){
                if (this.check4true(j, i)) {
                    this.fill(arr, parseInt(j), parseInt(i), 0);
                }
            }
        }
        console.log(this.domains)
    }
}

export default Matrix;