import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class LocalStrorageService {
  localAuth:string =  'localService';

  constructor(private auth: AuthService) { }


}
