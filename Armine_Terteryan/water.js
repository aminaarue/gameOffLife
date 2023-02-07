class Water {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 120;
        this.directions = [];
    }
    mul() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let eater2 = new Water(x, y);
            matrix[y][x] = 4;
            waterArr.push(eater2);

            this.energy = 20;
        }
    }
    eat() {
        let found = this.chooseCell(3);
        let exact = random(found)

        if (exact) {
            this.energy += 5;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < fireArr.length; i++) {
                if (fireArr[i].x == x && fireArr[i].y == y) {
                    fireArr.splice(i, 1)
                }
            }

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y

            if (this.energy > 30) {
                this.mul()
            }
        } else {
            this.move()
        }
    }
    move() {
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact) {
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        } else {
            this.energy--
            if (this.energy < 0) {
                this.die()
            }
        }
    }
    die() {
        for (let i = 0; i < waterArr.length; i++) {
            if (waterArr[i].x == this.x && waterArr[i].y == this.y) {
                waterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }

}