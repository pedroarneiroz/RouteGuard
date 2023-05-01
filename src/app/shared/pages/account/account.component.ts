import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  constructor() {}

  public exit(): boolean {
    if (confirm('Deseja realmente sair?')) {
      return true;
    }

    return false;
  }
}
