import { Component, Input, OnInit } from '@angular/core';
import { AutenticacionService } from '../services/autenticacion.service';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.scss']
})
export class BienvenidaComponent implements OnInit {

  constructor(private autenticacionService: AutenticacionService, private usuariosService: UsuariosService) { }

  usuario?: Usuario;
  id: string = "";

  ngOnInit(): void {
    this.usuariosService.currentLoginState.subscribe(msg => this.id = msg);
    this.traerUsuario(this.id);
  }

  public async traerUsuario(id: string) {
    await this.usuariosService.traer(id).then((respuesta) => {
      this.usuario = respuesta;
    });
  }
    
}
