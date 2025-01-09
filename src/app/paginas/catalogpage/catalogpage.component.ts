import { Component, ViewChild } from '@angular/core';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableCustomAction,
  PoPageDynamicTableField,
  PoPageDynamicTableModule,
} from '@po-ui/ng-templates';
import { environment } from '../../../environments/environment';
import {
  PoDynamicModule,
  PoDynamicViewField,
  PoModalComponent,
  PoModalModule,
  PoPageModule,
  PoTableModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-catalogpage',
  standalone: true,
  imports: [
    PoPageDynamicTableModule,
    PoPageModule,
    PoTableModule,
    PoModalModule,
    PoDynamicModule,
  ],
  templateUrl: './catalogpage.component.html',
  styleUrl: './catalogpage.component.css',
})
export class CatalogpageComponent {
  public fields: PoPageDynamicTableField[] = [
    { property: 'id', label: 'Id', filter: true, key: true },
    { property: 'name', label: 'Nome', allowColumnsManager: true },
    { property: 'genre', label: 'Genero' },
    { property: 'country', label: 'País' },
    {
      property: 'status',
      label: 'Status',
      filter: true,
      type: 'label',
      labels: [
        {
          value: 'active',
          label: 'Ativo',
          color: '#000080',
          textColor: '#F0F8FF',
          icon: 'ph ph-user',
        },
        {
          value: 'inactive',
          label: 'Inativo',
          color: '#F00000',
          textColor: '#F0F8FF',
          icon: 'ph ph-building',
        },
      ],
    },
  ];

  // public url: string = `${environment.url}/people`;
  public url: string = `${environment.url}/people`;
  public actions: PoPageDynamicTableActions = {
    new: '/catalog/new',
    remove: true,
    removeAll: true,
  };
  public tableActions: PoPageDynamicTableCustomAction[] = [
    {
      label: 'Detalhes',
      action: this.openDetailProduct.bind(this),
      icon: 'ph ph-user',
    },
  ];

  public nomeproduct: string = '';

  @ViewChild('catalogDetailModal') productModalEl!: PoModalComponent;

  public productFields: PoDynamicViewField[] = [
    { property: 'id', label: 'Id', gridColumns: 3 }, //gridColumns é no máximo 12, se tiver 12 ele ocupa a coluna toda
    // { property: 'name', label: 'Nome' },
    { property: 'genre', label: 'Genero' },
    { property: 'country', label: 'País', divider: 'País' },
    { property: 'status', label: 'Status' },
  ];

  public productData: any;

  public openDetailProduct(products: any) {
    this.nomeproduct = products.name;
    this.productData = products;
    this.productModalEl.open();
  }
}
