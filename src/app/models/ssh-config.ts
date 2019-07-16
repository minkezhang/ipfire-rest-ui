import { Config } from './config';

export class SshConfig extends Config {
  public enable_ssh_keys: boolean;
  public enable_ssh_passwords: boolean;
  public enable_ssh_portfw: boolean;
  public enable_ssh: boolean;
  public ssh_port: boolean;
  public enable_agent_forwarding: boolean;
}
