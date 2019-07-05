import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {

    if (this.authService.token == null) {
      this.authService.IniciarSession().subscribe(response => {
        this.authService.guardarToken(response.access_token);
      }, err => {
        if (err.status == 400) {
          alert('Error Login, Usuario o clave incorrectas!');
        }
      }
      );
    } 


  }

}
