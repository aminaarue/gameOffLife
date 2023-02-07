class Predator {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 30;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) { // empty cells array [[1,2], [2,4]]
        let found = [] //
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) { //
                    found.push(this.directions[i])
                }
            }
        }
        return found
    }
    eat() {
        this.getNewCoordinates()
        let allGrasses = this.chooseCell(1)
        let allGrassEaters = this.chooseCell(2)
        let all = allGrasses.concat(allGrassEaters)
        let oneCharacter = random(all)
        if (oneCharacter) {
            this.energy++;
            let neighX = oneCharacter[0];
            let neighY = oneCharacter[1];
            matrix[this.y][this.x] = 0;
            matrix[neighY][neighX] = 3;
            this.y = neighY;
            this.x = neighX;
            for (var i in grassArr) {
                if (neighX == grassArr[i].x && neighY == grassArr[i].y) {
                    grassArr.splice(i, 1);//[[1,2],[2,3]]
                    break;
                }
            }
            for (var i in grassEaterArr) {
                if (neighX == grassEaterArr[i].x && neighY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);//[[1,2],[2,3]]
                    break;
                }
            }
        }
        else {
            this.move()
        }
    }

    move() {
        //   console.log("as");

        if (this.energy > 0) {
            this.energy--
            this.getNewCoordinates()
            let allEmptyCells = this.chooseCell(0)
            let oneEmptyCell = random(allEmptyCells)
            if (oneEmptyCell) {
                let neighX = oneEmptyCell[0]
                let neighY = oneEmptyCell[1]
                matrix[this.y][this.x] = 0
                matrix[neighY][neighX] = 3
                this.x = neighX
                this.y = neighY


            }
        }
        else{
            this.die()
        }
    }
    die(){
        matrix[this.y][this.x] = 0;
        for(var i in predatorArr){
            if(this.x == predatorArr[i].x && this.y == predatorArr[i].y){
                predatorArr.slice(i, 1)

                break;

            }
        }
    }
    mul(){
        if(this.energy>12){
            var newCell = random(this.chooseCell(0));
            if(newCell){
                var newPredator = new Predator(newCell[0], newCell[1])
          predatorArr.push(newPredator);
                matrix[newCell[1]] [newCell[2]]  = 2;
                this.energy= this.energy - 10
            }
        }
    }
}