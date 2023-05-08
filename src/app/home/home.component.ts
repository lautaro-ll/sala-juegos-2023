import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private autenticacionService: AutenticacionService, private usuariosService: UsuariosService) { }

  usuario?: Usuario;
  id: string = "";

  ngOnInit(): void {
    this.usuariosService.currentLoginState.subscribe(msg => this.id = msg);
    this.traerUsuario(this.id);
    if(this.id == "")
      this.router.navigateByUrl('/login');
  }

  logout() {
    this.autenticacionService.logout();
    this.router.navigateByUrl('/login');
  }

  public async traerUsuario(id: string) {
    await this.usuariosService.traer(id).then((respuesta) => {
      this.usuario = respuesta;
    });
  }

}
