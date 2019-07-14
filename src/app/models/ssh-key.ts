export class SshKey extends Object {
  constructor(
    public file: string,
    public type: string,
    public fingerprint: string,
    public size: number) {
      super();
  }
}
