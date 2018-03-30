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
        // console.log(x, y)
        // console.log(this.matrix.childNodes[y].childNodes[x].innerHTML == '1')
        return this.matrix.childNodes[y].childNodes[x].innerHTML == '1'
    }

    get_arr(){
        let arr = []
        for (let str of this.matrix.childNodes){
            let row = []
            for (let item of str.childNodes){
                row.push(item.innerHTML)
            }
            arr.push(row);
        }
        return arr;
    }

    find_true_ell(){
        let arr = this.get_arr();
        let dom = []
        for (let y in arr){
            for (let x in arr[0]){
                if (this.check4true(x, y)){
                    let start_domain = {x: parseInt(x), y: parseInt(y)};
                    dom.push(start_domain);
                }
            }
        }
        return dom
    }

    find_domains(){
        let arr = this.get_arr();
        this.floodFill4(5, 10, arr)
    }

    floodFill4(x, y, newColor, oldColor = null) 
        { 
          if (!oldColor){
            oldColor = screenBuffer[x][y];
          }
          if(x >= 0 && x < screenBuffer.length && y >= 0 && y < screenBuffer[0].length && screenBuffer[x][y] == oldColor && screenBuffer[x][y] != newColor) 
          { 
            screenBuffer[x][y] = newColor; //set color before starting recursion

            floodFill4(x + 1, y,   newColor, oldColor);
            floodFill4(x - 1, y,   newColor, oldColor);
            floodFill4(x,   y + 1, newColor, oldColor);
            floodFill4(x,   y - 1, newColor, oldColor);
          }   
        }


    // find_hor_vert(){

    //     let arr = this.get_arr();
    //     let hor = []
    //     let dom_h = []
    //     let vert = []
    //     let dom_v = []
    //     for (let i in arr){
    //         for (let j in arr[i]){
    //             if (this.check4true(j, i)){
    //                 let start_domain = {x: j, y: i};
    //                 dom_h.push(start_domain);
    //             }
    //             else{
    //                 if (dom_h.length != 0){
    //                     hor.push(dom_h)
    //                     dom_h = []
    //                 } 
    //             }
    //         }
    //         if (dom_h.length != 0){
    //             hor.push(dom_h)
    //             dom_h = []
    //         }
    //     }

    //     for (let i in arr[0]){
    //         for (let j in arr){
    //             if (this.check4true(i, j)){
    //                 let start_domain = {x: i, y: j};
    //                 dom_v.push(start_domain);
    //             }
    //             else{
    //                 if (dom_v.length != 0){
    //                     vert.push(dom_v)
    //                     dom_v = []
    //                 } 
    //             }
    //         }
    //         if (dom_v.length != 0){
    //             vert.push(dom_v)
    //             dom_v = []
    //         }
    //     }
    //     return [hor, vert]
    // }
    // find_domains(){

    //     let [hor, vert] = this.find_hor_vert()

    //     for (let item_h of hor){
    //         for (let item_v of vert){
    //             console.log('hor', hor);
    //             console.log('vert', vert);
    //             [item_h, item_v] = this.comp_arr(item_h, item_v);
    //             // console.log('111', [...item_h], [...item_v])
    //             if (item_v.length == 0){
    //                 vert.splice(vert.indexOf(item_v), 1)
    //             }
    //         }
    //     }

    // }

    // comp_arr(arr1, arr2) {
    //     for (let item1 of arr1) {
    //         for (let item2 of arr2) {
    //             console.log(item1, item2)
    //             if (item1.x == item2.x && item1.y == item2.y) {
    //                 console.log('1arr1', [...arr1])
    //                 console.log('1arr2', [...arr2])
    //                 console.log(arr2.indexOf(item2))
    //                 arr2.splice(arr2.indexOf(item2), 1)
    //                 arr1.push(...arr2);
    //                 arr2 = [];
    //                 console.log('2arr1', [...arr1])
    //                 console.log('2arr2', [...arr2])
    //             }
    //         }
    //     }
    //     return [arr1, arr2];
    // }
}

export default Matrix;