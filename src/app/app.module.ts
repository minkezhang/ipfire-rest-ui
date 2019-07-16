import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatTableModule,
  MatFormFieldModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { RenderBoolPipe } from './pipes/render-bool';

import { SshSessionsComponent } from './components/ssh-sessions/ssh-sessions.component';
import { SshKeysComponent } from './components/ssh-keys/ssh-keys.component';
import { SshConfigComponent } from './components/ssh-config/ssh-config.component';
import { DynamicLeasesComponent } from './components/dynamic-leases/dynamic-leases.component';
import { FixedLeasesComponent } from './components/fixed-leases/fixed-leases.component';
import { DhcpConfigComponent } from './components/dhcp-config/dhcp-config.component';
import { EthernetConfigComponent } from './components/ethernet-config/ethernet-config.component';

@NgModule({
  declarations: [
    AppComponent,
    SshSessionsComponent,
    SshKeysComponent,
    SshConfigComponent,

    RenderBoolPipe,

    DynamicLeasesComponent,

    FixedLeasesComponent,

    DhcpConfigComponent,

    EthernetConfigComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
