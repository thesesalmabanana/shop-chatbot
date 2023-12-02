import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  selectedAgent: any;

  ids = [
    {
      'name': 'Reme',
      'id': 'e28c4464-d164-401b-bfab-a4fe94bd793f'
    }
  ];

  constructor(){
    this.selectedAgent = this.ids[Math.floor(Math.random() * this.ids.length)]
    this.addElement(this.selectedAgent);
  }

  addElement(agent:any) {
    const newChatbot = document.createElement("df-messenger",);

    newChatbot.setAttribute('intent','WELCOME')
    newChatbot.setAttribute('chat-title',agent.name)
    newChatbot.setAttribute('agent-id',agent.id)
    newChatbot.setAttribute('language-code','fr')
    newChatbot.setAttribute('chat-icon','../../assets/images/robot.png')
    newChatbot.setAttribute('wait-open','true')
  
    const currentFooter = document.querySelector('footer');
    document.body.insertBefore(newChatbot, currentFooter);
  }

}
