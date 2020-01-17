import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-dungeon',
  templateUrl: 'vault.page.html',
  styleUrls: ['vault.page.scss'],

animations: [
  trigger('changeDivSize', [
    state('initial', style({
      backgroundImage: 'url(/assets/vault.jpg)'
    })),
    state('final', style({
      
        backgroundImage: 'url(/assets/nay.png)'
 
    })),
    transition('initial=>final', animate('1500ms')),
    transition('final=>initial', animate('1000ms'))
  ]),
]


})
export class VaultPage {

    currentState = 'initial';
    showArrowSection:boolean = false;
    showCasltInputSection:boolean = true;
    failArrowSection:boolean = false;
    fiveDigits:boolean = false;
    alphabetSoup:boolean = false;

    wordyWord: any;
    directions: any;
    directioned:any;
    public directionalOutput:any = [];;
    hallInput:number;
    dungeonInput:number;
    courtInput1:number;
    courtInput2:number;
    longNumberVariable:number;

    playAudio(){
      let audio = new Audio();
      audio.src = "../../assets/noWrongAnswer.mp3";
      audio.load();
      audio.play();
    }

    playAudioWin(){
      let audio = new Audio();
      audio.src = "../../assets/moneyUse.mp3";
      audio.load();
      audio.play();
    }   

    playAudioLetter(){
      let audio = new Audio();
      audio.src = "../../assets/letter.mp3";
      audio.load();
      audio.play();
    } 

  constructor() { this.directions = [], this.wordyWord = [] }

    classVariableA:string = "animated letter";
    classVariableB:string = "animated letter";
    classVariableC:string = "animated letter";
    classVariableD:string = "animated letter";
    classVariableE:string = "animated letter";
    classVariableF:string = "animated letter";
    classVariableG:string = "animated letter";
    classVariableH:string = "animated letter";
    classVariableI:string = "animated letter";
    classVariableJ:string = "animated letter";
    classVariableK:string = "animated letter";
    classVariableL:string = "animated letter";
    classVariableM:string = "animated letter";
    classVariableN:string = "animated letter";
    classVariableO:string = "animated letter";
    classVariableP:string = "animated letter";
    classVariableQ:string = "animated letter";
    classVariableR:string = "animated letter";
    classVariableS:string = "animated letter";
    classVariableT:string = "animated letter";
    classVariableU:string = "animated letter";
    classVariableV:string = "animated letter";
    classVariableW:string = "animated letter";
    classVariableX:string = "animated letter";
    classVariableY:string = "animated letter";
    classVariableZ:string = "animated letter";


    lettersCoolA(){
        this.classVariableA = "animated letter swing";
        setTimeout(() =>{ this.classVariableA = "animated letter"; },500);
        this.playAudioLetter();
    }

    lettersCoolB(){
        this.classVariableB = "animated swing letter";
        setTimeout(() =>{ this.classVariableB = "animated letter " },500);
        this.playAudioLetter();
    }

    lettersCoolC(){
        this.classVariableC = "animated swing letter";
        setTimeout(() =>{ this.classVariableC = "animated letter " },500);
        this.playAudioLetter();
    }

    lettersCoolD(){
        this.classVariableD = "animated swing letter";
        setTimeout(() =>{ this.classVariableD = "animated letter " },500);
        this.playAudioLetter();
    }

    lettersCoolE(){
        this.classVariableE = "animated swing letter";
        setTimeout(() =>{ this.classVariableE = "animated letter " },500);
        this.playAudioLetter();
    }

    lettersCoolF(){
        this.classVariableF = "animated swing letter";
        setTimeout(() =>{ this.classVariableF = "animated letter " },500);
        this.playAudioLetter();
    }

    lettersCoolG(){
        this.classVariableG = "animated swing letter";
        setTimeout(() =>{ this.classVariableG = "animated letter " },500);
        this.playAudioLetter();
    }

    lettersCoolH(){
        this.classVariableH = "animated swing letter";
        setTimeout(() =>{ this.classVariableH = "animated letter " },500);
        this.playAudioLetter();
    }

    lettersCoolI(){
        this.classVariableI = "animated swing letter";
        setTimeout(() =>{ this.classVariableI = "animated letter " },500);
        this.playAudioLetter();
    }

    lettersCoolJ(){
        this.classVariableJ = "animated swing letter";
        setTimeout(() =>{ this.classVariableJ = "animated letter " },500);
         this.playAudioLetter();
    }

    lettersCoolK(){
        this.classVariableK = "animated swing letter";
        setTimeout(() =>{ this.classVariableK = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('K');
    }

    lettersCoolL(){
        this.classVariableL = "animated swing letter";
        setTimeout(() =>{ this.classVariableL = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('L');
        var stringOfWordyWords = this.wordyWord.toString();
    }
    lettersCoolM(){
        this.classVariableM = "animated swing letter";
        this.playAudioLetter();
        setTimeout(() =>{ this.classVariableM = "animated letter " },500);
        this.wordyWord.push('M');
        var stringOfWordyWords = this.wordyWord.toString();
        console.log(stringOfWordyWords);
    }
    lettersCoolN(){
        this.classVariableN = "animated swing letter";
        setTimeout(() =>{ this.classVariableN = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('N');
    }
    lettersCoolO(){
        this.classVariableO = "animated swing letter";
        setTimeout(() =>{ this.classVariableO = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('O');
    }
    lettersCoolP(){
        this.classVariableP = "animated swing letter";
        setTimeout(() =>{ this.classVariableP = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('P');
    }
    lettersCoolQ(){
        this.classVariableQ = "animated swing letter";
        setTimeout(() =>{ this.classVariableQ = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('Q');
    }
    lettersCoolR(){
        this.classVariableR = "animated swing letter";
        setTimeout(() =>{ this.classVariableR = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('R');
    }
    lettersCoolS(){
        this.classVariableS = "animated swing letter";
        setTimeout(() =>{ this.classVariableS = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('S');
    }
    lettersCoolT(){
        this.classVariableT = "animated swing letter";
        setTimeout(() =>{ this.classVariableT = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('T');
    }
    lettersCoolU(){
        this.classVariableU = "animated swing letter";
        setTimeout(() =>{ this.classVariableU = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('U');
    }
    lettersCoolV(){
        this.classVariableV = "animated swing letter";
        setTimeout(() =>{ this.classVariableV = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('V');
    }
    lettersCoolW(){
        this.classVariableW = "animated swing letter";
        setTimeout(() =>{ this.classVariableW = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('W');
    }
    lettersCoolX(){
        this.classVariableX = "animated swing letter";
        setTimeout(() =>{ this.classVariableX = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('X');
    }
    lettersCoolY(){
        this.classVariableY = "animated swing letter";
        setTimeout(() =>{ this.classVariableY = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('Y');
    }
    lettersCoolZ(){
        this.classVariableZ = "animated swing letter";
        setTimeout(() =>{ this.classVariableZ = "animated letter " },500);
        this.playAudioLetter();
        this.wordyWord.push('Z');
    }




    swipeLeft(){
        this.directions.push('Left');
    }
    swipeRight(){
        this.directions.push('Right');
    }
    swipeUp(){
        this.directions.push('Up');
        console.log("upppp");
    };
    swipeDown(){
        this.directions.push('Down');
    };


    deletDirections(directioned){
        let index = this.directions.indexOf(directioned);
        if(index >= -1){this.directions.splice(index, 1); }
        console.log(index);
    }

    enterOne(){
        console.log('enter works');
        if(this.hallInput === 7 && this.dungeonInput === 6 && (this.courtInput1 === 3 || this.courtInput1 === 5)  && (this.courtInput2 === 3 || this.courtInput2 === 5)){
            this.showArrowSection = true;
            this.showCasltInputSection = false;
            this.failArrowSection= false;
            this.currentState = 'initial';
            this.playAudioWin();
        }else{
            this.showArrowSection = false;
            this.showCasltInputSection = true;
            this.failArrowSection= true;
            this.playAudio();
            this.currentState = 'final';
        }
    }

    enterTwo(){
        let i = 0;
        var stringOfDirections = this.directions.toString();
            if(stringOfDirections==="Right,Down,Up,Down,Left,Left"){
                this.showArrowSection = false;
                console.log(stringOfDirections + ' worked');
                this.currentState = 'initial';
                this.playAudioWin();
                this.fiveDigits = true;
            }else{
                this.playAudio();
                this.currentState = 'final' ;
            };
    };

    longNumber(){
        if(this.longNumberVariable === 25743){
            this.fiveDigits = false;
            this.playAudioWin();
            this.alphabetSoup = true;
        }else{
                this.playAudio();
                this.alphabetSoup = false;
            }
    }
}
