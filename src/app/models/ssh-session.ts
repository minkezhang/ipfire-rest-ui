export class SshSession extends Object {
  constructor(
    public username: string,
    public login_timestamp: number,
    public ip: string) {
      super();
  }
}
