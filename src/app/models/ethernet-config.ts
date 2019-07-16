import { Config } from './config';

export class EthernetInterfaceConfig extends Object {
  public device: string;
  public mac: string;
  public description: string;
  public driver: string;
  public ip: string;
  public network_mask: string;
  public network_ip: string;
  public broadcast_ip: string;
}

export class EthernetConfig extends Config {
  public interfaces: {
    [ethernet_interface: string]: EthernetInterfaceConfig
  };
}
