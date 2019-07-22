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
import { SysVersionComponent } from './components/sys-version/sys-version.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { CpuDataComponent } from './components/cpu-data/cpu-data.component';
import { NetworkLeasesComponent } from './components/network-leases/network-leases.component';

import { MediaLayoutDirective } from './directives/media-layout/media-layout.directive';
import { RestApiVersionComponent } from './components/rest-api-version/rest-api-version.component';
import { RestApiVersionSmallComponent } from './components/rest-api-version/rest-api-version-small/rest-api-version-small.component';
import { SshKeysSmallComponent } from './components/ssh-keys/ssh-keys-small/ssh-keys-small.component';
import { SysVersionSmallComponent } from './components/sys-version/sys-version-small/sys-version-small.component';
import { SshSessionsSmallComponent } from './components/ssh-sessions/ssh-sessions-small/ssh-sessions-small.component';
import { SshConfigSmallComponent } from './components/ssh-config/ssh-config-small/ssh-config-small.component';
import { NetworkLeasesSmallComponent } from './components/network-leases/network-leases-small/network-leases-small.component';
import { EthernetConfigSmallComponent } from './components/ethernet-config/ethernet-config-small/ethernet-config-small.component';
import { DhcpConfigSmallComponent } from './components/dhcp-config/dhcp-config-small/dhcp-config-small.component';
import { FirewallRulesSmallComponent } from './components/firewall-rules/firewall-rules-small/firewall-rules-small.component';
import { ConnectionsSmallComponent } from './components/connections/connections-small/connections-small.component';

const appRoutes: Routes = [
  { path: 'cpu_data', component: CpuDataComponent },

  { path: 'network/connections', component: ConnectionsComponent },
  { path: 'network/dhcp', component: DhcpConfigComponent },
  { path: 'network/ethernet', component: EthernetConfigComponent },
  { path: 'network/firewall', component: FirewallRulesComponent },
  { path: 'network/leases', component: NetworkLeasesComponent },
  { path: 'ssh', component: SshConfigComponent },
  { path: 'ssh/keys', component: SshKeysComponent },
  { path: 'ssh/sessions', component: SshSessionsComponent },
  { path: 'version/sys', component: SysVersionComponent },
  { path: 'version/rest', component: RestApiVersionComponent },
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
    SysVersionComponent,
    ConnectionsComponent,
    CpuDataComponent,

    RenderBoolPipe,
    RenderDataPipe,
    RenderLegendPipe,
    RenderStringSplitPipe,
    RenderTargetPipe,
    RenderSNatPipe,
    RenderDNatPipe,
    NetworkLeasesComponent,

    MediaLayoutDirective,

    RestApiVersionComponent,

    RestApiVersionSmallComponent,

    SshKeysSmallComponent,

    SysVersionSmallComponent,

    SshSessionsSmallComponent,

    SshConfigSmallComponent,

    NetworkLeasesSmallComponent,

    EthernetConfigSmallComponent,

    DhcpConfigSmallComponent,

    FirewallRulesSmallComponent,

    ConnectionsSmallComponent 
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
