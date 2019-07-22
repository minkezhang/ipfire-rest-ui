import { Pipe, PipeTransform } from '@angular/core';

import { Connection, Target } from '../models/connection';

@Pipe({
  name: 'render_target'
})
export class RenderTargetPipe implements PipeTransform {
 transform(value: Target): string {
    return value.ip + (value.port ? (':' + value.port) : '');
  }
}

@Pipe({
  name: 'render_snat'
})
export class RenderSNatPipe implements PipeTransform {
  transform(value: Connection): string {
    const render_target_pipe = new RenderTargetPipe();
    const true_src = render_target_pipe.transform(value.request.src);
    const snat_src = render_target_pipe.transform(value.response.dest);
    return (true_src === snat_src) ? 'None' : snat_src;
  }
}

@Pipe({
  name: 'render_dnat'
})
export class RenderDNatPipe implements PipeTransform {
  transform(value: Connection): string {
    const render_target_pipe = new RenderTargetPipe();
    const true_dest = render_target_pipe.transform(value.response.src);
    const dnat_dest = render_target_pipe.transform(value.request.dest);
    return (true_dest === dnat_dest) ? 'None' : dnat_dest;
  }
}
