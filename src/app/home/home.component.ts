import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirigirALink() {
    // Redirige a la URL externa al hacer clic en el div
    window.location.href = 'https://math-table.pages.dev/loginGame';
  }

  redireccionarAtorresDeHanoi(): void {
    const postData = { game: "hanoitTower" };

    // Llama a la función postFetch con los parámetros deseados
    this.postFetch(postData)
      .then(response => {
       
        console.log('Respuesta:', response);

        this.router.navigate(['/hanoit-tower']);
      })
      .catch(error => {
        // Maneja el error aquí
        console.error('Error:', error);
      });
  }
  redireccionarASenku(): void {
    const postData = { game: "senku" };


    // Llama a la función postFetch con los parámetros deseados
    this.postFetch(postData)
      .then(response => {
       
        console.log('Respuesta:', response);

        this.router.navigate(['/senku']);
      })
      .catch(error => {
        // Maneja el error aquí
        console.error('Error:', error);
      });
  }
 redireccionarAMagicSquare(): void {
    const postData = { game: "magicSquare" };
    

    // Llama a la función postFetch con los parámetros deseados
    this.postFetch(postData)
      .then(response => {
       
        console.log('Respuesta:', response);

        this.router.navigate(['/magic-squares']);
      })
      .catch(error => {
        // Maneja el error aquí
        console.error('Error:', error);
      });
  }
  redireccionarABasicOperation(): void {
    const postData = { game: "basicOperation" };
    

    // Llama a la función postFetch con los parámetros deseados
    this.postFetch(postData)
      .then(response => {
       
        console.log('Respuesta:', response);

        this.router.navigate(['/basic-operations']);
      })
      .catch(error => {
        // Maneja el error aquí
        console.error('Error:', error);
      });
  }
  private async postFetch(postData): Promise<any> {
    try {
      let response = await fetch('https://script.google.com/macros/s/AKfycbydNJfeiM9bGnm_G4nReFHzAlNR2H4SMazEDFXAgmtI58lRJ6J-Ef-ZNKMGeGtRrirq/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return await response.json();
    } catch (error) {
      console.error('Error en la solicitud:', error);
      throw error;
    }
  }
}
