import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl : string = 'http://localhost:9000/api/users';
  constructor(private http : HttpClient) { }

  getAllUsers(){
    return this.http.get(this.userUrl);
  }

  getUserById(id : number){
    return this.http.get(this.userUrl + "/" + id);
  }

  deleteUserById(id : number){
    return this.http.delete(this.userUrl + "/" + id);
  }

  addUser(userObj : any){
    return this.http.post(this.userUrl, userObj);
  }

  editUser(userObj : any){
    return this.http.put(this.userUrl, userObj);
  }

  login(userObj: any){
    return this.http.post(this.userUrl + "/login", userObj)
  }

  signup(userObj: any){
    return this.http.post(this.userUrl + "/signup", userObj)
  }

  logout(userObj: any){

  }
}
