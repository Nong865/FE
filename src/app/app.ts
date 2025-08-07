import { Component } from '@angular/core';
import {  RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink ,Sidebar,FormsModule,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-su25';
}
