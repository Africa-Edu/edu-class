import { Component, OnInit } from '@angular/core';
import {Menus} from "./menus";

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
 menus: Menus[];
  constructor() { }

  ngOnInit(): void {
    this.menus =  [{name:'dashboard', path: "/dashboard"},
      {name: 'profile', path: '/profile'},
      {name: 'notes', path: '/notes'}
      ]
  }

}
