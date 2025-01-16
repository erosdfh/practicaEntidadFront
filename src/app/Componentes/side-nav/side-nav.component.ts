import { Component, OnInit,EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    links = [
    {ruta: 'HOME' , url: '/home' },
    {ruta: 'DOCUMENTO' , url: '/documento'},
    {ruta: 'CONTRIBUYENTE', url: '/contribuyente' },
    {ruta: 'ENTIDAD', url: '/entidad' },
]
@Output() CloseSidenav = new EventEmitter<void>();
  constructor() { }
 onClose(){
    this.CloseSidenav.emit();
  }
  ngOnInit(): void {
  }
}