import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'render_bool'
})
export class RenderBoolPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'enabled' : 'disabled';
  }
}
