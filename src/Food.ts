class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;
    }

    get x(): number {
        return this.element.offsetLeft;
    }

    get y(): number {
        return this.element.offsetTop;
    }


    change(): void {
        let x = Math.floor(Math.random() * 30) * 10
        let y = Math.floor(Math.random() * 30) * 10

        this.element.style.top = x + 'px';
        this.element.style.left = y + 'px';
    }
}

export default Food;