import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  easyProgress = 40;
  mediumProgress = 60;
  hardProgress = 30;

  goBack() {
    history.back()
  }
}
