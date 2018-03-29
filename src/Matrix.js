import Matrix__element from './Matrix__element';

class Matrix{
    constructor(container){
        this.container = container;

        this.matrix = document.createElement('div');

        this.container.appendChild(this.matrix);

        // this.create_matrix()
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
        return this.matrix.childNodes[y].childNodes[x].innerHTML == '1'
    }

    find_domains(){
        let arr_of_true = [];
        let domains = []
        let domain = []
        for (let [index_row, row] of this.matrix.childNodes.entries()){
            for (let [index_item, item] of row.childNodes.entries()){
                if (this.check4true(index_item, index_row)){
                    // console.log(index_item, index_row);
                    let start_domain = {x: index_item, y: index_row};
                    arr_of_true.push(start_domain);
                }

            }
        }
        console.log(arr_of_true)
        for (let item of arr_of_true){
            console.log(item)
            if (arr_of_true.indexOf(item) != -1){
                console.log('!=1')
            }
            item.y+=1;
            console.log(item)
            if (arr_of_true.indexOf(item) != -1){
                console.log('!=2')
            }
            // console.log(this.callback(arr_of_true, item))
            // domain.push(this.callback(arr_of_true, item))
        }
        // console.log(domain)
    }

    callback(arr, item){
        let find = false;
        let domain = []
        if (arr.indexOf(item) != -1){
            arr.slice(item, 1)
            domain.push(item)
        }
        item.y+=1;
        if (arr.indexOf(item) != -1){
            arr.slice(item, 1)
            domain.push(item)
            item.x-=1;
        }
        else{
            item.x+=1;
            item.y-=1;
        }
        if (arr.indexOf(item) != -1){
            arr.slice(item, 1)
            domain.push(item)
        }
        return domain
    }


}

export default Matrix;