import { Component, OnInit } from '@angular/core';
import { increditentns } from '../Shared/increditents.modal';

@Component({
  selector: 'app-shopinglist',
  templateUrl: './shopinglist.component.html',
  styleUrls: ['./shopinglist.component.scss']
})
export class ShopinglistComponent implements OnInit {
increditentns:increditentns[]=[
new increditentns ('apple',5),
new increditentns ('grapes',9),

];
  constructor() { }

  ngOnInit(): void {
  }

}
