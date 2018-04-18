import { Component } from '@angular/core';
import { DataService, Lookups } from './data.service';
import { AuthenticationService, WindowsUser } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private authRslt: WindowsUser;
  private authBack: string = 'grey';
  private postRslt: Lookups;
  private postBack: string = 'grey';

  constructor(
    private authSvc: AuthenticationService,
    private dataSvc: DataService
  ) {

  }
  testAuthentication(): void {
    this.authSvc.getUser()
      .subscribe(
        r => { this.authRslt = r; this.authBack = 'success'; },
        e => { console.log(e); this.authBack = 'error'; }
      );
  }

  testPostData(): void {
    this.dataSvc.save()
      .subscribe(
        r => { this.postRslt = r; this.postBack = 'success'; },
        e => { console.log(e); this.postBack = 'error'; }
      );
  }
}
