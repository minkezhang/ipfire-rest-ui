export class Target extends Object {
  public ip: string;
  public port: number;
}

export class Route extends Object {
  public src: Target;
  public dest: Target;
}

export class Connection extends Object {
  public l3_name: string;
  public l4_name: string;
  public request: Route;
  public response: Route;
  public rx: number;
  public tx: number;
  public state: string;
  public ttl: number;
}
