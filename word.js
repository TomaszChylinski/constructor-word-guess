var letter = require("letter.js");


function word(answer){

    this.objArrary = [];
    for(var i = 0; i <answer.length; i++){
        var cpuLetter = new letter(answer[i])
        this.objArrary.push(cpuLetter)

    }
    this.log = function(){
        var answerLog = "";
        for(var i = 0; i < this.objArrary.length; i++){
            answerLog += this.objArrary[i] + " ";
        }
        console.log(answerLog + "\n========================\n")
    }
    this.userGuess = function(input){
        for(var i; i < this.objArrary.length; i++){
            this.objArrary[i].guess(input);
        }
    }

}

module.exports = word;