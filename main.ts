import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-4">
      <div class="card shadow">
        <div class="card-body">
          <!-- Display -->
          <input type="text" class="form-control mb-3 text-end" [(ngModel)]="display" readonly>

          <!-- Buttons -->
          <div class="row g-2">
            <div class="col-3" *ngFor="let btn of buttons">
              <button class="btn btn-secondary w-100" (click)="onButtonClick(btn)">
                {{ btn }}
              </button>
            </div>
          </div>

          <!-- Clear & Equals -->
          <div class="row g-2 mt-3">
            <div class="col-6">
              <button class="btn btn-danger w-100" (click)="clear()">C</button>
            </div>
            <div class="col-6">
              <button class="btn btn-success w-100" (click)="calculate()">=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
})
export class App {
  display: string = '';
  buttons: string[] = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '+',
  ];

  onButtonClick(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
  }

  calculate() {
    try {
      this.display = eval(this.display).toString();
    } catch {
      this.display = 'Error';
    }
  }
}

bootstrapApplication(App);
