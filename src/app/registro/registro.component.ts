import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router, private autenticacionService: AutenticacionService, private usuariosService: UsuariosService) { }

  regForm!: FormGroup;

  ngOnInit(): void {
    this.regForm = new FormGroup({
      nombre: new FormControl("", {validators: [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]+$')], updateOn: 'blur'}),
      mail: new FormControl("", {validators: [Validators.required, Validators.email], updateOn: 'blur'}),
      clave: new FormControl("", {validators: [Validators.required, Validators.minLength(6)], updateOn: 'blur'}),
      repiteClave: new FormControl("", {validators: [Validators.required, Validators.minLength(6)], updateOn: 'blur'})
    });
  }
  get nombre(){
    return this.regForm.get('nombre');
  }
  get mail(){
    return this.regForm.get('mail');
  }
  get clave(){
    return this.regForm.get('clave');
  }
  get repiteClave(){
    return this.regForm.get('repiteClave');
  }
  registrarse(){
    console.log("registrarse");
  }

  goToLogin() {
    this.router.navigateByUrl("login");
  }
}
