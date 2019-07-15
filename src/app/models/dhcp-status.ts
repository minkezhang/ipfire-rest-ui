import { Status } from './status';

export class FixedLease extends Object {
  public ip: string;
  public mac: string;
  public enabled: boolean;
  public next_server: string;
  public filename: string;
  public root_path: string;
  public remark: string;
}

export class DynamicLease extends Object {
  public ip: string;
  public mac: string;
  public start: number;
  public end: number;
  public hostname: string;
  public hardware_type: string;
}

export class DhcpStatus extends Status {
  public fixed: FixedLease[];
  public dynamic: DynamicLease[];
}
