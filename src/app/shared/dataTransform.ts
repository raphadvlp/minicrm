import { PoDataTransform } from '@po-ui/ng-sync';

export class DataTransform extends PoDataTransform {
  public getDateFieldName(): string {
    return 'data';
  }

  public getItemsFieldName(): string {
    return 'data';
  }

  public getPageParamName(): string {
    return 'page';
  }

  public getPageSizeParamName(): string {
    return 'page';
  }

  public hasNext(): boolean {
    return false;
  }
}
