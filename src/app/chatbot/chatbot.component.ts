import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  @Input({ required: true }) chatbotName!: string;
  @Input({ required: true }) chatbotID!: string;

  public get name(){
    return this.chatbotName;
  }

  public get id(){
    return this.chatbotID;
  }

  
}
