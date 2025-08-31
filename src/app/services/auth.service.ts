import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static getRole() {
    throw new Error('Method not implemented.');
  }

  // Restrict access to components based on user roles.
  constructor() { }
  private role :string | null = null;
  login(role:string){
    this.role = role;
  }

  getRole(){
    return this.role;
  }

  logout(){
    this.role = null;
  }
}
