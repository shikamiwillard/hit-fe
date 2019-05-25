import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { TechiesComponent } from './techies/techies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({uri: 'https://humansintech.herokuapp.com/graphql'}),
    cache: new InMemoryCache(),
  };
}
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SubmissionsComponent,
    TechiesComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
