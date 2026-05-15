import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [FormsModule, RouterLink, FadeInDirective],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
  onSubmit(e: Event): void {
    e.preventDefault();
    alert('Спасибо! Это демонстрационный сайт — заявка не отправляется.');
    (e.target as HTMLFormElement).reset();
  }
}
