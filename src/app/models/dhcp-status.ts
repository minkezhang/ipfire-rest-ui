export class IpLease extends Object {
  public ip: string;
  public mac: string;
  public start: number;
  public end: number;
  public hostname: string;
  public hardware_type: string;
}

export class DhcpStatus extends Object {
  public fixed: IpLease[];
  public dynamic: IpLease[];
}
