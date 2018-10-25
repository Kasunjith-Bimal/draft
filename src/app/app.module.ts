import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgOidcClientModule } from 'ng-oidc-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgOidcClientModule.forRoot({
      oidc_config: {
        authority: 'https://ng-oidc-client-server.azurewebsites.net',
        client_id: 'ng-oidc-client-identity',
        redirect_uri: 'http://localhost:4200/callback.html',
        response_type: 'id_token token',
        scope: 'openid profile offline_access api1',
        post_logout_redirect_uri: 'http://localhost:4200/signout-callback.html',
        silent_redirect_uri: 'http://localhost:4200/renew-callback.html',
        automaticSilentRenew: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
