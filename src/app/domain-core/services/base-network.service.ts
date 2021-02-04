import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NzMessageService } from '@synyi/ng-zorro-antd';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export abstract class BaseNetworkService {
  public file: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _antMessageService: NzMessageService) {
  }

  public get signatureToken(): string {
    return User.getCurrentUser().signatureToken;
  }

  public abstract getApiUrl(url: string): string;

  public request(method: string, url: string): Observable<any> {
    const headers = this.prepareHeaders();
    return this.http.request(method, this.getApiUrl(url), { headers })
      .pipe(catchError((httpError) => this.catchAuthError(httpError)));
  }

  public get(url: string): Observable<any> {
    const headers = this.prepareHeaders();
    return this.http.get(this.getApiUrl(url), { headers })
      .pipe(catchError((httpError) => this.catchAuthError(httpError)));
  }

  public post(url: string, body: any): Observable<any> {
    const headers = this.prepareHeaders();
    return this.http.post(this.getApiUrl(url), body, { headers })
      .pipe(catchError((httpError) => this.catchAuthError(httpError)));
  }

  public put(url: string, body: any): Observable<any> {
    const headers = this.prepareHeaders();
    return this.http.put(this.getApiUrl(url), body, { headers })
      .pipe(catchError((httpError) => this.catchAuthError(httpError)));
  }

  public delete(url: string): Observable<any> {
    const headers = this.prepareHeaders();
    return this.http.delete(this.getApiUrl(url), { headers })
      .pipe(catchError((httpError) => this.catchAuthError(httpError)));
  }

  public patch(url: string, body: any): Observable<any> {
    const headers = this.prepareHeaders();
    return this.http.patch(this.getApiUrl(url), body, { headers })
      .pipe(catchError((httpError) => this.catchAuthError(httpError)));
  }

  public head(url: string): Observable<any> {
    const headers = this.prepareHeaders();
    return this.http.head(this.getApiUrl(url), { headers })
      .pipe(catchError((httpError) => this.catchAuthError(httpError)));
  }

  public options(url: string): Observable<any> {
    const headers = this.prepareHeaders();
    return this.http.options(this.getApiUrl(url), { headers })
      .pipe(catchError((httpError) => this.catchAuthError(httpError)));
  }

  private prepareHeaders(): HttpHeaders {
    const headers = { 'Content-Type': 'application/json' };
    if (this.signatureToken) {
      const authorization = `Bearer ${this.signatureToken}`;
      headers['Authorization'] = authorization;
    }
    return new HttpHeaders(headers);
  }

  private catchAuthError(httpError: HttpErrorResponse): Observable<HttpErrorResponse> {
    const currentUser = User.getCurrentUser();
    if (httpError.status === 401) {
      currentUser.destroy();
      this.router.navigate(['/login']);
    }

    this.alertError(httpError);
    return of(httpError);
  }

  private alertError(httpError: HttpErrorResponse): void {
    const { status, message } = httpError;
    if (status >= 400 && message) {
      const msg = message || '网络错误';
      this._antMessageService.error(msg);
      throw new Error(msg);
    }
  }
}
