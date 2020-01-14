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
    directions: any;
    directioned:any;
    public directionalOutput:any = [];;
    hallInput:number;
    dungeonInput:number;
    courtInput1:number;
    courtInput2:number;

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

  constructor() { this.directions = [] }
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

 
    enterTwo(){
        let i = 0;
        var stringOfDirections = this.directions.toString();
            if(stringOfDirections==="Right,Down,Up,Down,Left,Left"){
                this.showArrowSection = false;
                console.log(stringOfDirections + ' worked');
                this.currentState = 'initial';
                this.playAudioWin();
            }else{
                this.playAudio();
                this.currentState = 'final' ;
            };
  
    };

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

}
