import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'oidc-client';
import { HttpClient } from '@angular/common/http';
import { OidcFacade } from 'ng-oidc-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userInfo$: Observable<User>;

  constructor(private http: HttpClient, private oidcFacade: OidcFacade) {}

  ngOnInit() {}

  checkUserInfo() {
    const identityProviderUrl = this.oidcFacade.getOidcClient().settings
      .authority;

    this.userInfo$ = this.http.get<User>(
      `${identityProviderUrl}/connect/userinfo`
    );
  }
}
