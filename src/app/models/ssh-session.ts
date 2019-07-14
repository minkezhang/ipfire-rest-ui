export class SshSession extends Object {
  constructor(
    public username: string,
    public active_since: string,
    public ip: string) {
      super();
  }
}
