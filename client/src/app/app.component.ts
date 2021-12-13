import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'The app dating';
  users: any;
  

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

   getUsers (){
     this.http.get('https://localhost:5001/api/users').subscribe(response => {
      
       this.users = response;
      
     },error =>{
       console.log(error);
     })
   }

  // getUsers (){
  //   this.http.get('https://localhost:5001/api/users').subscribe ({
  //     next : this.handleUpdateResponse.bind ( this ),
  //     error : this.handleError.bind ( this )
  // });
  // }
}

