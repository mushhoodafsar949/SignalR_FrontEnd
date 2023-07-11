import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  senddata(){
    var data={
      Type: 'warning',
      Information: 'text information message'
    }
    this.http.get("https://localhost:7015/api/StudentsfromCodefirst/get").subscribe(
      data=>{
        console.log(data);
      }
    );
  }

}
