import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';

import { GoogleChartsModule } from 'angular-google-charts';

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
  MatFormFieldModule,
  MatExpansionModule,
  MatDividerModule,
  MatTabsModule,
  MatToolbarModule,
  MatSidenavModule
} from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';

import { RenderBoolPipe } from './pipes/render-bool';
import { RenderDataPipe, RenderLegendPipe } from './pipes/render-data';
import { RenderStringSplitPipe } from './pipes/render-string-split';
import {
  RenderTargetPipe,
  RenderSNatPipe,
  RenderDNatPipe
} from './pipes/render-connection-ips';

import { SshSessionsComponent } from './components/ssh-sessions/ssh-sessions.component';
import { SshKeysComponent } from './components/ssh-keys/ssh-keys.component';
import { SshConfigComponent } from './components/ssh-config/ssh-config.component';
import { DhcpConfigComponent } from './components/dhcp-config/dhcp-config.component';
import { EthernetConfigComponent } from './components/ethernet-config/ethernet-config.component';
import { FirewallRulesComponent } from './components/firewall-rules/firewall-rules.component';
import { SysConfigComponent } from './components/sys-config/sys-config.component';
import { ApiVersionComponent } from './components/api-version/api-version.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { CpuDataComponent } from './components/cpu-data/cpu-data.component';
import { LeasesComponent } from './components/leases/leases.component';
import { MediaLayoutComponent } from './components/shared/media-layout/media-layout.component';

const appRoutes: Routes = [
  { path: 'api_version', component: ApiVersionComponent },
  { path: 'connections', component: ConnectionsComponent },
  { path: 'cpu_data', component: CpuDataComponent },
  { path: 'dhcp_config', component: DhcpConfigComponent },
  { path: 'ethernet_config', component: EthernetConfigComponent },
  { path: 'firewall_rules', component: FirewallRulesComponent },
  { path: 'leases', component: LeasesComponent },
  { path: 'ssh_config', component: SshConfigComponent },
  { path: 'ssh_keys', component: SshKeysComponent },
  { path: 'ssh_sessions', component: SshSessionsComponent },
  { path: 'sys_config', component: SysConfigComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SshSessionsComponent,
    SshKeysComponent,
    SshConfigComponent,
    DhcpConfigComponent,
    EthernetConfigComponent,
    FirewallRulesComponent,
    SysConfigComponent,
    ApiVersionComponent,
    ConnectionsComponent,
    CpuDataComponent,

    RenderBoolPipe,
    RenderDataPipe,
    RenderLegendPipe,
    RenderStringSplitPipe,
    RenderTargetPipe,
    RenderSNatPipe,
    RenderDNatPipe,
    LeasesComponent,
    MediaLayoutComponent
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
    MatDividerModule,
    MatTabsModule,
    MatListModule,
    MatRippleModule,
    LayoutModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSidenavModule,
    GoogleChartsModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
