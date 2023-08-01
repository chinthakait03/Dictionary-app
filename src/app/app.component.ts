import { Component } from '@angular/core';
import { DictionaryService } from './dictionary.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dictionary';
  data: any;
  inpword!: string;
  


  
  constructor(private dic : DictionaryService){

  }
  
  getdata() {

   
   
    this.dic.get(this.inpword).subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      
       
    });
  }

  playsound() {
    const sound = document.getElementById('sound') as HTMLAudioElement;
    const audioUrl = this.data[0]?.phonetics[0]?.audio;
    if (audioUrl) {
      sound.setAttribute('src', audioUrl.replace(/^https?:/, ''));
      sound.play();
    }
  }

  

  onInput() {
    
    if (this.inpword.length === 0) {
      this.data = null;
    }
  }
  
}


