export class MetaData extends Object {
  public start: number;
  public end: number;
  public step: number;
  public legend: string[];
  public unit: string;
}

export class Data extends Object {
  public meta: MetaData;
  public data: number[][];
}
