import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  
  

  constructor(private http:HttpClient) { 

  }

  private api = "https://api.dictionaryapi.dev/api/v2/entries/en"

  get(word: string) {
    const url = `${this.api}/${word}`;
    return this.http.get(url);
  }







}
