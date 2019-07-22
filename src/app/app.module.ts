import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { GoogleChartsModule } from 'angular-google-charts';

import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';

import { LayoutModule } from '@angular/cdk/layout';

import { RenderBoolPipe } from './pipes/render-bool';
import {
  RenderDNatPipe,
  RenderSNatPipe,
  RenderTargetPipe
} from './pipes/render-connection-ips';
import { RenderDataPipe, RenderLegendPipe } from './pipes/render-data';
import { RenderStringSplitPipe } from './pipes/render-string-split';

import { ConnectionsComponent } from './components/connections/connections.component';
import { CpuDataComponent } from './components/cpu-data/cpu-data.component';
import { DhcpConfigComponent } from './components/dhcp-config/dhcp-config.component';
import { EthernetConfigComponent } from './components/ethernet-config/ethernet-config.component';
import { FirewallRulesComponent } from './components/firewall-rules/firewall-rules.component';
import { NetworkLeasesComponent } from './components/network-leases/network-leases.component';
import { SshConfigComponent } from './components/ssh-config/ssh-config.component';
import { SshKeysComponent } from './components/ssh-keys/ssh-keys.component';
import { SshSessionsComponent } from './components/ssh-sessions/ssh-sessions.component';
import { SysVersionComponent } from './components/sys-version/sys-version.component';

import { ConnectionsSmallComponent } from './components/connections/connections-small/connections-small.component';
import { CpuDataSmallComponent } from './components/cpu-data/cpu-data-small/cpu-data-small.component';
import { DhcpConfigSmallComponent } from './components/dhcp-config/dhcp-config-small/dhcp-config-small.component';
import { EthernetConfigSmallComponent } from './components/ethernet-config/ethernet-config-small/ethernet-config-small.component';
import { FirewallRulesSmallComponent } from './components/firewall-rules/firewall-rules-small/firewall-rules-small.component';
import { NetworkLeasesSmallComponent } from './components/network-leases/network-leases-small/network-leases-small.component';
import { RestApiVersionSmallComponent } from './components/rest-api-version/rest-api-version-small/rest-api-version-small.component';
import { RestApiVersionComponent } from './components/rest-api-version/rest-api-version.component';
import { SshConfigSmallComponent } from './components/ssh-config/ssh-config-small/ssh-config-small.component';
import { SshKeysSmallComponent } from './components/ssh-keys/ssh-keys-small/ssh-keys-small.component';
import { SshSessionsSmallComponent } from './components/ssh-sessions/ssh-sessions-small/ssh-sessions-small.component';
import { SysVersionSmallComponent } from './components/sys-version/sys-version-small/sys-version-small.component';
import { MediaLayoutDirective } from './directives/media-layout/media-layout.directive';

const appRoutes: Routes = [
  { path: 'data/cpu', component: CpuDataComponent },
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
  { path: '',
    redirectTo: '/network/ethernet',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,

    RenderBoolPipe,
    RenderDataPipe,
    RenderLegendPipe,
    RenderStringSplitPipe,
    RenderTargetPipe,
    RenderSNatPipe,
    RenderDNatPipe,

    MediaLayoutDirective,

    SshSessionsComponent,
    SshKeysComponent,
    SshConfigComponent,
    DhcpConfigComponent,
    EthernetConfigComponent,
    FirewallRulesComponent,
    SysVersionComponent,
    ConnectionsComponent,
    CpuDataComponent,
    NetworkLeasesComponent,
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
    ConnectionsSmallComponent,
    CpuDataSmallComponent
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
