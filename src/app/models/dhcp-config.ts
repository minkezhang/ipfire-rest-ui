import { Config } from './config';

export class InterfaceConfig extends Object {
  public enabled: boolean;
  public enablebootp: boolean;
  public start_addr: string;
  public end_addr: string;
  public domain_name: string;
  public default_lease_time: number;
  public max_lease_time: number;
  public dns1: string;
  public dns2: string;

  // Unrendered fields.
  public wins1: string;
  public wins2: string;
  public ntp1: string;
  public ntp2: string;
  public next: string;
  public file: string;
  public dns_update_key_name: string;
  public dns_update_key_secret: string;
  public dns_update_key_algo: string;
}

export class DhcpConfig extends Config {
  public interfaces: { [dhcp_interface: string]: InterfaceConfig };
  public dns_update_enabled: boolean;

  // Not useful for REST API.
  private sort_leaselist: string;
  private sort_fleaselist: string;
}
