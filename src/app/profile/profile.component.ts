import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  student = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Cityville',
    study: 'Bachelor of Science in Computer Science'
  };
  goBack() {
    history.back()
  }

}
