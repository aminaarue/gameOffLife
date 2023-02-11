class Grass extends LivingCreature {


    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 4 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }




    // chooseCell(character) { //0,1
    //     let found = []
    //     for (let i in this.directions) {
    //         let x = this.directions[i][0]
    //         let y = this.directions[i][1]
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    //             if (matrix[y][x] == character) {
    //                 found.push(this.directions[i])
    //             }
    //         }
    //     }
    //     return found
    // }

    // mul() {

    //     this.multiply++; //1
    //     var newCell = random(this.chooseCell(0)); //newCell-1 datark harevan
    //     if (this.multiply >= 3 && newCell) { //[3,4]
    //         var newGrass = new Grass(newCell[0], newCell[1]);
    //         grassArr.push(newGrass);
    //         matrix[newCell[1]][newCell[0]] = 1;
    //         this.multiply = 0;
    //     }
    // }

}