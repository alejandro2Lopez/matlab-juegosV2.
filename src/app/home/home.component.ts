import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  redirigirALink() {
    // Redirige a la URL externa al hacer clic en el div
    window.location.href = 'https://math-table.pages.dev/loginGame';
  }

}
