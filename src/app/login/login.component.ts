import { Component, OnInit } from '@angular/core';
import { OidcFacade } from 'ng-oidc-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private oidcFacade: OidcFacade) {}

  ngOnInit() {}

  loginRedirect() {
    this.oidcFacade.signinRedirect({
      data: {
        redirect_url: 'http://localhost:4200/protected'
      }
    });
  }
}
