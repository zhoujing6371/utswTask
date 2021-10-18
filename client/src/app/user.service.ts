import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new User();

  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(user: User): Observable<any>{
    return this._http.post<any>("http://localhost:8080/loginuser", user)
  }

  public registerUserFromRemote(user: User): Observable<any>{
    return this._http.post<any>("http://localhost:8080/registeruser", user)
  }

  public loadAllUsersFromUserType(type: String): Observable<any>{
    return this._http.post<any>("http://localhost:8080/listAllUsersByType", type)
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
  }

  
}
