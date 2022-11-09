import { navbarData } from './nav-data';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import {  style, transition } from '@angular/animations';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;

}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  // animations: [
  //   trigger('fadeInOut',[
  //     transition(':enter',[
  //       style({opacity : 0}),
  //       animate('350ms',
  //         style({opacity:1})
  //       )
  //     ])
  //   ]),
  //   transition(':leave',[
  //     style({opacity : 0}),
  //     animate('350ms',
  //       style({opacity:1})
  //     )
  //   ])

  // ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth = 0;
  collapsed = false;
  navData = navbarData;
  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize',['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if (this.screenWidth<=768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});

    }
  }
  closeSidenav(){
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }
  toggleLeCollapse(){
    this.collapsed = !this.collapsed
    this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

  constructor() { }



}
function animate(arg0: string): any {
  throw new Error('Function not implemented.');
}

function trigger(arg0: string, arg1: any[]): any {
  throw new Error('Function not implemented.');
}

