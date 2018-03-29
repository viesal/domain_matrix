class Matrix__element{
    constructor(container, h, w){
        this.container = container;
        this.index_h = h;
        this.index_w = w;
        this.element = document.createElement('div');
        this.element.innerHTML = '0';
        this.element.className = 'unselectable cursor-default';
        this.element.style.cursor = 'default';
        this.element.style.paddingLeft = '5px';

        this.container.appendChild(this.element);
        this.element.addEventListener('click', ()=>{
            this.change();
        })
    }
    change(){
        if(this.element.innerHTML=='1'){
            this.element.innerHTML = '0';
        }
        else {
            this.element.innerHTML = '1';
        }
    }
}

export default Matrix__element;