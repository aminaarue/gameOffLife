var matrix = [

];

var side = 30;
let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let waterArr = [];
let fireArr = []
function setup() {
    frameRate(5);
    function matrixGenerator(size, countGrass, countGrassEater, countPredator, countWater, countFire) {
        for (let i = 0; i < size; i++) {
            matrix.push([])
            for (let j = 0; j < size; j++) {
                matrix[i].push(0)
            }

        }
        for (let k = 0; k < countGrass; k++) {
            let x = Math.floor(random(size))
            let y = Math.floor(random(size))
            matrix[y][x] = 1
        }
        for (let k = 0; k < countGrassEater; k++) {
            let x = Math.floor(random(size))
            let y = Math.floor(random(size))
            matrix[y][x] = 2
        }
        for (let k = 0; k < countPredator; k++) {
            let x = Math.floor(random(size))
            let y = Math.floor(random(size))
            matrix[y][x] = 3
        }
        for (let k = 0; k < countWater; k++) {
            let x = Math.floor(random(size))
            let y = Math.floor(random(size))
            matrix[y][x] = 4
        }
        for (let k = 0; k < countFire; k++) {
            let x = Math.floor(random(size))
            let y = Math.floor(random(size))
            matrix[y][x] = 5
        }


    }
    matrixGenerator(20, 10, 5, 7, 5, 5)
    createCanvas(matrix[0].length * side, matrix.length * side);


    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y)
                grassEaterArr.push(grassEater)
            }
            else if (matrix[y][x] == 3) {
                let predator = new Predator(x, y)
                predatorArr.push(predator)
            }
            else if (matrix[y][x] == 4) {
                let water = new Water(x, y)
                waterArr.push(water)
            }
            else if (matrix[y][x] == 5) {
                let fire = new Fire(x, y)
                fireArr.push(fire)
            }


        }
    }

}

// console.log(grassEaterArr);
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");

            }
            else if (matrix[y][x] == 2) {
                fill("yellow");

            }
            else if (matrix[y][x] == 3) {
                fill('pink')
            }
            else if (matrix[y][x] == 4) {
                fill('blue')
            }
            else if (matrix[y][x] == 5) {
                fill('red')
            }

            rect(x * side, y * side, side, side);
        }






    }
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].mul()
    }

    for (let i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat()
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].mul()
    }
    for (let i = 0; i < predatorArr.length; i++) {
        predatorArr[i].move()

    }
    for (let i = 0; i < predatorArr.length; i++) {
        predatorArr[i].eat()

    }
    // for (let i = 0; i < fireArr.length; i++) {
    //     fireArr[i].eat();
    // }
    // for (let i = 0; i < fireArr.length; i++) {
    //     fireArr[i].move();
    // }
    // for (let i = 0; i < waterArr.length; i++) {
    //     waterArr[i].eat();
    // }
    // for (let i = 0; i < waterArr.length; i++) {
    //     waterArr[i].move();
    // }


}