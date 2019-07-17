import { Status } from './status';

export class FirewallSchedule extends Object {
  public monday: boolean;
  public tuesday: boolean;
  public wednesday: boolean;
  public thursday: boolean;
  public friday: boolean;
  public saturday: boolean;
  public sunday: boolean;
}

export class FirewallSwitches extends Object {
  public enabled: boolean;
  public enable_src_filter: boolean;
  public enable_srv: boolean;
  public enable_logging: boolean;
  public enable_scheduling: boolean;
  public enable_nat: boolean;
  public throttle_connection_pool: boolean;
  public rate_limit_connection: boolean;
}

export class FirewallRule extends Object {
  public position: number;
  public action: string;
  public chain: string;
  public switches: FirewallSwitches;
  public src_type: string;
  public src: string;
  public dest_type: string;
  public dest: string;
  public l4_protocol: string;
  public icmp_target: string;
  public dest_filter_type: string;
  public dest_filter: string;
  public comment: string;
  public schedule: FirewallSchedule;
  public start_time: number;
  public end_time: number;
  public nat_target: string;
  public dnat_port: number;
  public nat_target_type: string;
  public connection_pool_size: number;
  public connection_rate_limit_scalar: number;
  public connection_rate_limit_unit: string;
}

export class FirewallStatus extends Status {
  public forward: FirewallRule[];
  public input: FirewallRule[];
  public output: FirewallRule[];
}
