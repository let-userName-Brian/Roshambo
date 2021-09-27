const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { string } = require('yargs')
const argv = yargs(hideBin(process.argv)).argv
const roshambo = ['rock', 'paper', 'scissors']

class Game {
    constructor(playerOne, playerTwo) {
        this.playerOne = playerOne
        this.playerTwo = playerTwo
    }
    logic() {
        let moveOne = this.playerOne.getMove()
        let moveTwo = this.playerTwo.getMove()
        console.log(this.playerOne.getName(), ':', moveOne)
        console.log(this.playerTwo.getName(), ':', moveTwo)

        if (moveOne === 'rock' && moveTwo === 'paper' ||
            moveOne === 'paper' && moveTwo === 'scissors' ||
            moveOne=== 'scissors' && moveTwo === 'rock')
        {
        console.log(`~${this.playerTwo.getName()} wins.~`)
        } else if (moveOne === 'rock' && moveTwo === 'rock' ||
            moveOne === 'paper' && moveTwo === 'paper' ||
            moveOne === 'scissors' && moveTwo === 'scissors')
        {
        console.log('~ You are even.~')
    } else if(moveOne !== roshambo || moveTwo !== roshambo){
        console.log(`~${this.playerOne.getName()} please chose a move idiot!~`)
    }else {
        console.log(`~${this.playerOne.getName()} is superior in every way!~`)
    }
    }
}

class ComputerMove {
    constructor() {}
    getMove() {
      return roshambo[Math.floor(Math.random() * roshambo.length)]
    }
    getName() {
        return "Mr. Robot-o"
    }
}

class UserMove {
    constructor(value) {
        this.value = value
    }
    getMove() {
        return this.value
    }
    getName() {
        return "The human"
    }
}

const userInput = argv.move
const game = new Game(new UserMove(userInput), new ComputerMove())
game.logic()