import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component  {

  constructor() { }
    servers:any =[];
  ngOnInit(): void {
  }
  onAddServer(){
    console.log("data1");

    this.servers.push('ANTOHER SERVER')

  }
  onRemoveServer(id:number){

    const position = id + 1;
    this.servers.splice(position, 1);

  }
}
