import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
  }

  logout() {
    this.autenticacionService.logout();
    this.router.navigateByUrl('/login');
  }
}
