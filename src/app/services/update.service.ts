import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../interfaces/responce';

@Injectable({
  providedIn: 'root',
})

export class UpdateService {

  public constructor(private httpClient: HttpClient) { }

  public getLastNRecods(n : number){
    return this.httpClient.get<RootObject[]>('https://hpblk-wrapper.herokuapp.com/all/' + n);
  }

  public getLastRecod(){
    return this.httpClient.get<RootObject[]>('https://hpblk-wrapper.herokuapp.com/all/' + 1);
  }
}