import { Component, Input } from '@angular/core';

@Component({
  selector: 'paginator',
  imports: [],
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent {

  @Input() url: string = '';

  @Input() paginator: any = {};
}
