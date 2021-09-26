class Snake {
    head: HTMLElement;
    bodies: HTMLCollection;
    element: HTMLElement;

    constructor() {
        this.head = document.querySelector('#snake > div')! as HTMLElement;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div')!;
        this.element = document.getElementById('snake')!;
    }

    get X(): number {
        return this.head.offsetLeft;
    }

    get Y(): number {
        return this.head.offsetTop;
    }

    set X(value) {
        if (this.X === value) return

        if (value < 0 || value > 290) {
            throw new Error('撞墙！')
        }

        this.head.style.left = value + 'px';
    }
    set Y(value) {
        if (this.Y === value) return

        if (value < 0 || value > 290) {
            throw new Error('撞墙！')
        }

        this.head.style.top = value + 'px';
    }

    addBody(): void {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    moveBody(): void {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
        }
    }
}

export default Snake;