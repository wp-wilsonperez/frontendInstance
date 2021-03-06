<<<<<<< HEAD
import { Router } from '@angular/router';
import { UserSessionService } from './../providers/session.service';
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Location } from '@angular/common';
import { AppState } from '../app.state';



@Component({
  selector: 'az-pages',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [ AppState,UserSessionService ]
})
export class PagesComponent implements OnInit {

    public isMenuCollapsed:boolean = false;
  
    constructor(private _state:AppState, 
                private _location:Location,
                public local:UserSessionService,
                public router:Router
                ) {
        this.local.checkUser()?null:this.router.navigate(['/login']);
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });  
      
    }

    ngOnInit() {
         
        this.getCurrentPageName();
    }

    public getCurrentPageName():void{       
        let url = this._location.path();
        let hash = (window.location.hash) ? '#' : '';    
        setTimeout(function(){
            let subMenu = jQuery('a[href="'+ hash + url + '"]').closest("li").closest("ul");            
            window.scrollTo(0, 0);
            subMenu.closest("li").addClass("sidebar-item-expanded"); 
            subMenu.slideDown(250);    
        });
    }

    public hideMenu():void{
        this._state.notifyDataChanged('menu.isCollapsed', true);    
    }

    public ngAfterViewInit(): void {
        document.getElementById('preloader').style['display'] = 'none';
    }

}
=======
import { Router } from '@angular/router';
import { UserSessionService } from './../providers/session.service';
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Location } from '@angular/common';
import { AppState } from '../app.state';



@Component({
  selector: 'az-pages',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [ AppState,UserSessionService ]
})
export class PagesComponent implements OnInit {

    public isMenuCollapsed:boolean = false;
  
    constructor(private _state:AppState, 
                private _location:Location,
                public local:UserSessionService,
                public router:Router
                ) {
        this.local.checkUser()?null:this.router.navigate(['/login']);
        this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
            this.isMenuCollapsed = isCollapsed;
        });  
      
    }

    ngOnInit() {
         
        this.getCurrentPageName();
    }

    public getCurrentPageName():void{       
        let url = this._location.path();
        let hash = (window.location.hash) ? '#' : '';    
        setTimeout(function(){
            let subMenu = jQuery('a[href="'+ hash + url + '"]').closest("li").closest("ul");            
            window.scrollTo(0, 0);
            subMenu.closest("li").addClass("sidebar-item-expanded"); 
            subMenu.slideDown(250);    
        });
    }

    public hideMenu():void{
        this._state.notifyDataChanged('menu.isCollapsed', true);    
    }

    public ngAfterViewInit(): void {
        document.getElementById('preloader').style['display'] = 'none';
    }

}
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
