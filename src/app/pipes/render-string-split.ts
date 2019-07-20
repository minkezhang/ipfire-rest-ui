import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'render_string_split'
})
export class RenderStringSplitPipe implements PipeTransform {
  transform(value: string, delimiter: string, part: number): string {
    const parts: string[] = value.split(delimiter);
    if (part < 0) {
      part = parts.length + part;
    }
    return parts[part];
  }
}
