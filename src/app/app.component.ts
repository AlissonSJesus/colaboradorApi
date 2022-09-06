import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private loadingBar: LoadingBarService, private router: Router) {
    
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    }); 
  }

  ngOnInit(): void {
      this.startLoading()
  }

  private navigationInterceptor(event: any): void { 
    
  }

  startLoading() {
    this.loadingBar.useRef().start();
  }

  stopLoading() {
    this.loadingBar.useRef().complete();
  }
}
