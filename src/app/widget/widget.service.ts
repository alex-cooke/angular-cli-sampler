import { Injectable } from '@angular/core';

@Injectable()
export class WidgetService {

  constructor() { }

  async getWidgets() : Promise<any[]> {
    return ITEMS;
  }

  async getWidget(code: string) {
    return ITEMS.find(x => x.code === code);
  }
}

const ITEMS: any[] = [
  {
    code: 'A',
    name: "Widget A"
  },
  {
    code: 'B',
    name: 'Widget B'
  }
];
