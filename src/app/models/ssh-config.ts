import { Config } from './config'

export class SshConfig extends Config {
  constructor(
    public enable_ssh_keys: boolean,
    public enable_ssh_passwords: boolean,
    enable_ssh_portfw: boolean,
    enable_ssh: boolean,
    ssh_port: boolean) {
      super();
  }
}
