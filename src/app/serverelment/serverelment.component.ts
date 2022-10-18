import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverelment',
  templateUrl: './serverelment.component.html',
  styleUrls: ['./serverelment.component.scss']
})
export class ServerelmentComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string, content: string} |any;

  constructor() { }


  ngOnInit(): void {
  }


}
