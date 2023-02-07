class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 50;
        this.directions = [];
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
    move() {
     //   console.log("as");
        if (this.energy > 0) {
            this.getNewCoordinates();
            this.energy--;
            let emptyCells = this.chooseCell(0) //[[1,2],[2,5]]
            let oneEmptyCell = random(emptyCells) //[1,2]
            if (oneEmptyCell) {
                matrix[this.y][this.x] = 0
                let neighX = oneEmptyCell[0]
                let neighY = oneEmptyCell[1]
                matrix[neighY][neighX] = 2
                this.y = neighY
                this.x = neighX
            }
        }
        else {
        this.die();
        }
    }

    eat() {
        this.getNewCoordinates()
        let grasses = this.chooseCell(1)
        let oneGrass = random(grasses)
        if (oneGrass) {
            this.energy++;
            let oneGrassX = oneGrass[0];
            let oneGrassY = oneGrass[1];
            matrix[oneGrassY][oneGrassX] = 2;
            matrix[this.y][this.x] = 0;
            this.y = oneGrassY;
            this.x = oneGrassX;
            for (var i in grassArr) {
                if (oneGrassX == grassArr[i].x && oneGrassY == grassArr[i].y) {
                    grassArr.splice(i, 1);//[[1,2],[2,3]]
                    break;
                }
            }
        }
         else {
        this.move()
        }
    }
    die(){
        matrix[this.y][this.x] = 0;
        for(var i in grassEaterArr){
            if(this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y){
                grassEaterArr.slice(i, 1)

                break;

            }
        }
    }
    mul(){
        if(this.energy>12){
            var newCell = random(this.chooseCell(0));
            if(newCell){
                var newGrasseater = new GrassEater(newCell[0], newCell[1])
                grassEaterArr.push(newGrasseater);
                matrix[newCell[1]] [newCell[2]]  = 2;
                this.energy= this.energy - 10
            }
        }
    }
    
}