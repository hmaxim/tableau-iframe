import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare var initViz: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {
  }

  title = 'naya-iframe';
  url: string;

  openTableau() {
    this.httpClient.get('api/planets')
      .subscribe(() => {
        const token = 'DJXI-P-CQ9i3gacX5X6U0w==:87RSP9IhWewCFS43x-m5Z3zK';
        this.url = `http://nayatech.ddns.net:82//trusted/${token}/t/Template/views/Superstore/Overview?:refresh=y`;

        // tslint:disable-next-line:no-unused-expression
        new initViz(this.url);
      });

  }
}
