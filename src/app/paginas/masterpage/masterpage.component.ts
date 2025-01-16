import { Component, inject, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  PoDialogService,
  PoMenuItem,
  PoMenuModule,
  PoMenuPanelItem,
  PoMenuPanelModule,
  PoPageModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-masterpage',
  standalone: true,
  imports: [PoMenuModule, PoMenuPanelModule, PoPageModule, RouterModule],
  templateUrl: './masterpage.component.html',
  styleUrl: './masterpage.component.css',
})
export class MasterpageComponent {
  title: string = 'Home';
  #dialog = inject(PoDialogService);

  // readonly menus: Array<PoMenuLabelItem> = [
  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      shortLabel: 'Home',
      link: 'home',
      action: this.clickItemMenu.bind(this),
      icon: 'po-icon po-icon-home',
    },
    // {
    //   label: 'Customers',
    //   link: 'customers',
    //   action: this.clickItemMenu.bind(this),
    //   icon: 'po-icon po-icon-users',
    // },
    {
      label: 'Usuarios',
      shortLabel: 'Usuarios',
      link: 'catalog',
      action: this.clickItemMenu.bind(this),
      icon: 'po-icon ph ph-users',
    },
    {
      label: 'Produtos',
      shortLabel: 'Produtos',
      link: 'grupoproduct',
      action: this.clickItemMenu.bind(this),
      icon: 'po-icon po-icon-grid',
    },
    // {
    //   label: 'Budget',
    //   link: 'budget',
    //   action: this.clickItemMenu.bind(this),
    //   icon: 'po-icon po-icon-pushcart',
    // },
    {
      label: 'Exit',
      shortLabel: 'Exit',
      // link: 'logoff',
      action: this.clickIteLogoff.bind(this),
      icon: 'po-icon po-icon-exit',
    },
  ];

  clickItemMenu(menu: PoMenuPanelItem): void {
    this.title = menu.label;
  }

  // Logoff
  clickIteLogoff() {
    this.#dialog.confirm({
      title: 'Confirmação de logoff',
      message: 'Deseja realmente sair?',
      confirm: () => {
        localStorage.clear();
        location.reload();
      },
      cancel: () => {},
    });
  }
}
