import { Pipe, PipeTransform } from '@angular/core';

import { Data } from '../models/data';

@Pipe({
  name: 'render_data'
})
export class RenderDataPipe implements PipeTransform {
  transform(value: Data): number[][] {
    let t: number = value.meta.start;
    let data: number[][] = [];
    for (const d of value.data) {
      data = data.concat([[t].concat(d)]);
      t += value.meta.step;
    }
    return data;
  }
}

@Pipe({
  name: 'render_legend'
})
export class RenderLegendPipe implements PipeTransform {
  transform(value: Data): string[] {
    return ['time'].concat(value.meta.legend);
  }
}
