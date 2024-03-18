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
      'name': 'Léo',
      'id': '90edf658-27c1-414b-bc26-e9e1370149db'
    },
    {
      'name': 'Thomas',
      'id': 'eec6aa44-48d7-4194-904e-f4e6f8da3694'
    },
    {
      'name': 'Rémi',
      'id': '6b161587-b624-4cd2-816f-e35fe4da7188'
    },
    {
      'name': 'Paul',
      'id': 'c6a915b3-5e2c-4211-a9a0-c6c941c72360'
    },
    {
      'name': 'Henri',
      'id': '20c5ff19-5fa8-4f70-a4ee-5d113e1fe387'
    },
    {
      'name': 'Franck',
      'id': '38236a7b-142b-4bab-bea4-67341a36d4d0'
    }
  ];

  constructor(){
    this.selectedAgent = this.ids[Math.floor(Math.random() * this.ids.length)]
    //this.addElement(this.selectedAgent);
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
