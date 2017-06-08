import { Injectable } from '@angular/core';

declare var localStorage;
declare var sessionStorage;
@Injectable()
export class StorageService {

  public get(key: string) {
    return JSON.parse(localStorage.getItem(`AAMCO:${key}`));
  }

  public set(key: string, value: any) {
    localStorage.setItem(`AAMCO:${key}`, JSON.stringify(value));
  }

  public remove(key: string) {
    localStorage.removeItem(`AAMCO:${key}`);
  }

  public getSession(key: string) {
    return JSON.parse(sessionStorage.getItem(`AAMCO:${key}`));
  }

  public setSession(key: string, value: any) {
    sessionStorage.setItem(`AAMCO:${key}`, JSON.stringify(value));
  }

  public removeSession(key: string) {
    sessionStorage.removeItem(`AAMCO:${key}`);
  }
}