import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 links = [
  { ruta: 'HOME',  url: '/home' },
  {ruta: 'DOCUMENTO' , url: '/documento'},
  {ruta: 'CONTRIBUYENTE', url: '/contribuyente' },
  {ruta: 'ENTIDAD', url: '/entidad' },
];
  @Output() SidenavToggle = new EventEmitter<void>();
  constructor(public router: Router) { }
  onToggleSidenav() {
    this.SidenavToggle.emit();
  }
  ngOnInit(): void {
  }
}