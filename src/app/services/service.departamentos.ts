import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Departamento } from "../models/departamento";
import { environment } from "../../environments/environment";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceDepartamentos {
    constructor(
        private _http: HttpClient
    ) {}

    async getDepartamentosAsync(): Promise<Departamento[]> {
        //Para el request miro en el servicio
        let request = "api/departamentos";
        //La url de la api
        let url = environment.apiejemplos + request;
        return firstValueFrom(
            this._http.get<Departamento[]>(url)
        )
    }

    async insertDepartamento(departamento: Departamento): Promise<any> {
        let request = "api/departamentos";
        //La url
        let url = environment.apiejemplos + request;
        let header = new HttpHeaders().set("content-type", "application/json")
        return firstValueFrom(
            //Enviamos la Url, el objeto que es de tipo Departamento (model departamento)
            //y el header con el formato con el que se realizará el POST
            this._http.post(url, departamento, {headers: header})
        )
    }

    async deleteDepartamento(id: number): Promise<any> {
        let request = "api/departamentos/" + id;
        let url = environment.apiejemplos + request;
        return firstValueFrom(
            this._http.delete(url)
        )
    }
}