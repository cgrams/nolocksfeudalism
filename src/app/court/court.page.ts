import { Component } from '@angular/core';

@Component({
  selector: 'app-court',
  templateUrl: 'court.page.html',
  styleUrls: ['court.page.scss']
})
export class CourtPage {

    hideMe:boolean= false;
     count: number = 0;
  constructor() {}

    firstAnswerCourt:string = "";
    secondAnswerCourtHidden:string= "";
    firstAnswerCourtHidden:string = "";
        onKey1(event) {
            const inputValue = event.target.value;
            console.log(inputValue);
            if(inputValue == "me" || inputValue == "Me" || inputValue == "ME"){
                this.firstAnswerCourt = "The next number is 3!";
                 
            }else{this.firstAnswerCourt = "Keep trying";}
    }


    hide() {

        console.log(this.count++);
       let newCount = this.count > 5 ? this.hideMe = true : this.hideMe = false;
        //this.hideMe= !this.hideMe;
    }


    onKey2(event){
        const inputValue2 = event.target.value;
        if(inputValue2 == "sorry"){
            console.log('sorry works');
            this.secondAnswerCourtHidden = "The last number is 5!";
        }else{this.secondAnswerCourtHidden = "Keep trying";}
    }
}
