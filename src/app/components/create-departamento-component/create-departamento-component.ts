import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create-departamento-component',
  standalone: false,
  styleUrl: './create-departamento-component.css',
  templateUrl: './create-departamento-component.html',
})
export class CreateDepartamentoComponent {
  @ViewChild("cajaid") cajaid!: ElementRef
  @ViewChild("cajanombre") cajanombre!: ElementRef
  @ViewChild("cajalocalidad") cajalocalidad!: ElementRef
  mensaje!: string

  constructor(
    private _service: ServiceDepartamentos,
    private _cdr: ChangeDetectorRef
  ) {}

  async insertarDepartamento(): Promise<void> {
    let cajaid = parseInt(this.cajaid.nativeElement.value)
    let cajanombre = this.cajanombre.nativeElement.value
    let cajalocalidad = this.cajalocalidad.nativeElement.value
    let departamento = new Departamento(cajaid,cajanombre,cajalocalidad);
    await this._service.insertDepartamento(departamento);
    this.mensaje = "Departamento insertado";
    this._cdr.detectChanges();
  }
}
