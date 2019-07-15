export class SshKey extends Object {
  public file: string;
  public type: string;
  public fingerprint: string;
  public size: number;
}

export class SshSession extends Object {
  public username: string;
  public login_timestamp: number;
  public ip: string;
}

export class SshStatus extends Object {
  public keys: SshKey[];
  public sessions: SshSession[];
}
