import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent {
  public publishers = [
    { id: 'DC Comics', desc: 'Dc - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];
}
