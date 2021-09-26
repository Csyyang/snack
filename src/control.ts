import Food from './Food'
import ScorePanel from './ScopePanel'
import Snake from './snake'


class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    direction: string = '';

    settime: number = 0;

    isLive: Boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    init(): void {
        document.addEventListener('keydown', this.keyDownHandler.bind(this));

        this.run();

    }

    keyDownHandler(e: KeyboardEvent): void {
        console.log(e.key)
        this.direction = e.key;
    }

    run(): void {
        let x = this.snake.X;
        let y = this.snake.Y;

        switch (this.direction) {
            case 'ArrowUp':
                y -= 10;
                break;
            case 'ArrowDown':
                y += 10;
                break;
            case 'ArrowLeft':
                x -= 10;
                break;
            case 'ArrowRight':
                x += 10;
                break;
        }
        try {
            this.snake.X = x;
            this.snake.Y = y;
        } catch (e: any) {
            alert(e.message)
            this.isLive = false;
        }

        this.checkEat(x, y)


        this.isLive && (this.settime = window.setTimeout(() => {
            this.run();
        }, 300 - (this.scorePanel.level - 1) * 30))
    }

    checkEat(x: number, y: number): void {
        if (x === this.food.x && y === this.food.y) {
            console.log('吃到');
            this.food.change();
            this.scorePanel.addScore();

            this.snake.addBody();
        }

    }
}

export default GameControl;