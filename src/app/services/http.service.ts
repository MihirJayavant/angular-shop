import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { environment } from 'src/environments/environment'

@Injectable()
export class HttpService {
  private http = inject(HttpClient)

  private readonly baseUrl = environment.baseUrl

  public get<T>(endpoint: string) {
    return this.http.get<T>(this.baseUrl + endpoint)
  }

  public post<T, U>(endpoint: string, body: U) {
    return this.http.post<T>(this.baseUrl + endpoint, body)
  }

  public put<T, U>(endpoint: string, body: U) {
    return this.http.put<T>(this.baseUrl + endpoint, body)
  }

  public delete<T>(endpoint: string) {
    return this.http.delete<T>(this.baseUrl + endpoint)
  }
}
