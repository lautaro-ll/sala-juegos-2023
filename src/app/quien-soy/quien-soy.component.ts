import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.scss']
})
export class QuienSoyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('usuario') != 'admin'){
      console.log("sin permisos de ingreso");
      //this.router.navigateByUrl('/login'); 
    }
  }

}