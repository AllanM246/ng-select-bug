import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ng-select-bug';

  items = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Vue' },
    { id: 4, name: 'Svelte' },
    { id: 5, name: 'Ember' }
  ];
}
