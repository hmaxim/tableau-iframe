import {AfterViewInit, Component} from '@angular/core';

declare var initViz: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'naya-iframe';

  ngAfterViewInit() {
    const token = 'Sv45ROMiScOageWquq6sew==:tTDAUAgm6LY9rWWPOSdvbY1o';
    const url = `http://nayatech.ddns.net:82//trusted/${token}/t/Template/views/Superstore/Overview?:refresh=y`;

    // tslint:disable-next-line:no-unused-expression
    new initViz(url);
  }
}
