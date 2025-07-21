import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SideBar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,SideBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-su25';
}
