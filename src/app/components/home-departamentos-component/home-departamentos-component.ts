import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-home-departamentos-component',
  standalone: false,
  styleUrl: './home-departamentos-component.css',
  templateUrl: './home-departamentos-component.html',
})
export class HomeDepartamentosComponent implements OnInit{
  arraydepartamentos: Departamento[] = [];
  
  constructor(
    private _service: ServiceDepartamentos,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    //Cargamos el array con el servicio
    this.arraydepartamentos = await this._service.getDepartamentosAsync();
    this._cdr.detectChanges();
  }
}
