import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{Demonio} from '../Interface/demonio.interface';
import{Combate} from '../Interface/combate.interface'
import{Dororo} from '../Interface/dororo.interface'


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiURL:string="http://localhost:8081/api/Demonio";
  private apiURL2: string="http://localhost:8081/api/Combate"
  private apiURL3: string="http://localhost:8081/api/Dororo"
  private header=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http: HttpClient) { }

  getDemonios():Observable<Demonio[]>{
    return this.http.get<Demonio[]>(this.apiURL);
  }
  
  getCombates():Observable<Combate[]>{
    return this.http.get<Combate[]>(this.apiURL2).pipe(
      map((response)=> response as Combate[])
    );
  }

  getDororos():Observable<Dororo[]>{
    return this.http.get<Dororo[]>(this.apiURL3).pipe(
      map( (response) => response as Dororo[])
    );
  }

  create(dororo:Dororo):Observable<Dororo>{
    return this.http.post<Dororo>(this.apiURL3,dororo,{headers:this.header});

  }
  create1(combate:Combate):Observable<Combate>{
    return this.http.post<Combate>(this.apiURL2,combate,{headers:this.header});
  }

}
