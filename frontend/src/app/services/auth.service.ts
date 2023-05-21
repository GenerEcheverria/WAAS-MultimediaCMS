import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

/**
 * Servicio de autenticación y gestión de usuarios.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'http://localhost:8000/api/auth';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

   /**
   * Registra un nuevo usuario.
   * @param name Nombre del usuario.
   * @param email Correo electrónico del usuario.
   * @param password Contraseña del usuario.
   * @param role Rol del usuario.
   * @param phone Número de teléfono del usuario.
   * @param photo Foto del perfil del usuario.
   * @returns Observable que representa la respuesta del servidor.
   */
  register(name: string, email: string, password: string, role: string, phone: string, photo: string) {
    return this.http.post<any>(this.url + '/register', { name, email, password, role, phone, photo }, this.httpOptions);
  }

  /**
   * Inicia sesión con las credenciales proporcionadas.
   * @param email Correo electrónico del usuario.
   * @param password Contraseña del usuario.
   * @returns Observable que representa la respuesta del servidor.
   */
  login(email: string, password: string) {
    return this.http.post<any>(this.url + '/login', { email, password });
  }

  /**
   * Cierra la sesión del usuario actual.
   * @returns Observable que representa la respuesta del servidor.
   */
  logout() {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<any>(this.url + '/logout', {},httpOptions);
  }

  /**
   * Obtiene el token de autenticación almacenado en el almacenamiento local.
   * @returns El token de autenticación o null si no está presente.
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Comprueba si el usuario ha iniciado sesión.
   * @returns Observable que indica si el usuario ha iniciado sesión o no.
   */
  isLoggedIn() {
    const token = this.getToken();
    if (token) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      };
      return this.http.get<any>(this.url + `/check`, httpOptions);
    }
    return of({ valid: false });
  }

}
