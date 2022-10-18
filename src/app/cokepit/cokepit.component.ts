import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cokepit',
  templateUrl: './cokepit.component.html',
  styleUrls: ['./cokepit.component.scss']
})
export class CokepitComponent implements OnInit {
  serverElements:any[]=[];
  @Output() serverCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() bluePrintCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  constructor() { }
  newServerName = '';
  newServerContent = '';

  ngOnInit(): void {
  }
  onAddServer(){
this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent})
  }
  onAddBlueprint(){
    this.bluePrintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent})

  }

}


