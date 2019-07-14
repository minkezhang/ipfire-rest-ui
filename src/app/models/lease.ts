export class IPLease extends Object {
  constructor(
    public ip: string,
    public mac: string,
    public start: number,
    public end: number,
    public hostname: string,
    public hardware_type: string) {
      super();
  }
}
