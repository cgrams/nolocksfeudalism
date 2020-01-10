import { Component } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hall',

    animations: [
      trigger('changeDivSize', [
        state('original', style({
          backgroundImage: 'url(/assets/crusades.jpg)',
          backgroundColor: 'white',
        })),
        state('final', style({
          backgroundImage: 'url(/assets/muslimInfo.png)',
          backgroundColor: 'grey',
        })),
        state('final1', style({
          backgroundImage: 'url(/assets/webImage.png)',
          backgroundColor: 'grey',
        })),
        state('final2', style({
          backgroundImage: 'url(/assets/treeWeb.png)',
          backgroundColor: 'grey',
        })),
        state('initial', style({
          backgroundColor: '#cfc48f',
          backgroundImage: 'url(/assets/crusades.jpg)'
        })),
        transition('initial=>final', animate('1500ms')),
        transition('initial=>final1', animate('1500ms')),
        transition('initial=>final2', animate('1500ms')),
        transition('initial=>original', animate('1500ms')),

        transition('final=>initial', animate('1500ms')),
        transition('final=>final1', animate('1500ms')),
        transition('final=>final2', animate('1500ms')),
        transition('final=>original', animate('1500ms')),

        transition('final1=>final', animate('1500ms')),
        transition('final1=>final2', animate('1500ms')),
        transition('final1=>original', animate('1500ms')),
        transition('final1=>initial', animate('1500ms')),

        transition('final2=>final', animate('1500ms')),
        transition('final2=>final1', animate('1500ms')),
        transition('final2=>original', animate('1500ms')),
        transition('final2=>initial', animate('1500ms')),

        transition('original=>final', animate('1500ms')),
        transition('original=>final1', animate('1500ms')),
        transition('original=>final2', animate('1500ms')),
        transition('original=>initial', animate('1500ms')),
      ]),
    ],


  templateUrl: 'hall.page.html',
  styleUrls: ['hall.page.scss']
})
export class HallPage {
    ishidden:boolean = true;
    currentState = 'initial';
    hideMessage(){this.ishidden=true;}

    secretMessage:string;
    changeState(){ this.currentState = this.currentState === 'initial' ? 'final' : 'final'; }
    changeState1(){ this.currentState = this.currentState === 'initial' ? 'final1' : 'final1'; }
    changeState2(){ this.currentState = this.currentState === 'initial' ? 'final2' : 'final2'; }
    originalState(){ this.currentState = this.currentState === 'initial' ? 'original' : 'original'; }

  constructor(public alertController: AlertController) {}


    async presentAlert() {
        const alert = await this.alertController.create({
            header: 'What is this image?',
            cssClass: 'my-custom-alert',
            subHeader: 'Primary Source',
            message: 'They are:',
            buttons: [{
                text: 'Ok',
                cssClass: 'inputSolve',
                handler: () => {
                    console.log('Ok Saved');
                    this.ishidden= false;
                }
                }],

            inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Christians (left)',
          value: '1',
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Muslims (right)',
          value: '1'
        },
        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Christians (right)',
          value: '0'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Muslims (left)',
          value: '0'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Entering Eden',
          value: '1'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Entering Hell',
          value: '0'
        },
        ]
        });
        await alert.present();
        let result = await alert.onDidDismiss();
        console.log(result.data.values[0]);
        console.log(result.data.values[1]);
        
        let messageLogic1 = result.data.values[0];
        let messageLogic2 = result.data.values[1];
        let messageLogic3 = result.data.values[2];
        let addUpValues = messageLogic3 + messageLogic2 + messageLogic1;
        console.log(addUpValues + " this is the added up values");
        if(addUpValues == 111 ){
            this.secretMessage = "Count the number of christians in the image and that is your first number. (It is considered a holy number)" ;
            this.currentState = this.currentState === 'initial' ? 'original' : 'original'; 
        }else{ this.secretMessage = "Try again..."}

   
    }


}
