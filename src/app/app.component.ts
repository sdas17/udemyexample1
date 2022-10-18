import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoping';
  ServerElements = [{type :'servers',name:'Testserver',content:'just a test:'}];

  onServerAdded(serverData:{serverName:string,serverContent:string}){
    this.ServerElements.push({
      type: 'server',
      name: serverData.serverName ,
      content: serverData.serverContent
    });
  }
  onServerprinted(blueprintData:{serverName:string,serverContent:string}){
    this.ServerElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent

  });
  }
}
