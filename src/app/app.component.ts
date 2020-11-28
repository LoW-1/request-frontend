import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'request-frontend';


  postData = {
    number: 1234
  }

  url = 'https://93cb301c-7cc7-44a6-b019-22037a39dc7e.mock.pstmn.io/stuff/'
  url2 = 'https://93cb301c-7cc7-44a6-b019-22037a39dc7e.mock.pstmn.io/post/'
  json_response;


  constructor(private http: HttpClient){}

  ngOnInit() {

        this.http.get(this.url).subscribe(res => {
          console.log(JSON.stringify(res));
        })


        this.http.post(this.url2, this.postData).subscribe(res => {
          console.log(JSON.stringify(res));
        })

  };

}
