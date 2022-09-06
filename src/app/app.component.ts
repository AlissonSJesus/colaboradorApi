import { Component, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * @desc Construtor responsável por trabalhar com a questão do LoadingBarService na aplicação
   * @param loadingBar 
   * @param router 
   */
  constructor(private loadingBar: LoadingBarService, private router: Router) {

    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit(): void {
    this.startLoading();
  }

  /**
   * Método responsável por tratar as condicionais em relação ao LoadingBarService
   * @param event 
   */
  private navigationInterceptor(event: any): void {
    if (event instanceof NavigationStart) {
      this.startLoading();
    } else if (event instanceof NavigationCancel) {
      this.stopLoading();
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Canceled!'
      })
    } else if (event instanceof NavigationError) {
      this.stopLoading();
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }else if(event instanceof NavigationEnd){
      this.stopLoading();
    }
  }

  startLoading() {
    this.loadingBar.useRef().start();
  }

  stopLoading() {
    this.loadingBar.useRef().complete();
  }
}
