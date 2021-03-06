class ScorePanel {
    score: number = 0;
    level: number = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    maxLevel: number;
    upScore: number;
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;

        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }


    addScore(): void {
        this.score++;
        this.scoreEle.innerText = this.score + '';

        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    levelUp(): void {
        if (this.level + 1 > this.maxLevel) {
            return
        }

        this.level++;
        this.levelEle.innerText = this.level + '';
    }
}

export default ScorePanel;