import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class UpdateService {

   public constructor(private httpClient: HttpClient) { }

    public getUPdate(){
     return   this.httpClient.get('https://hpb.health.gov.lk/api/get-current-statistical');
    
      }

    

}