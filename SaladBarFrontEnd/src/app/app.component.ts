import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiGenericServiceViaHttpClientService } from './services/api/api-generic-service-via-http-client.service';
import { ApiGenericServiceService } from './services/api/api-generic-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SaladBarFrontEnd';

  constructor(
    private apiGenericServiceService: ApiGenericServiceService,
    private apiGenericServiceViaHttpClientService: ApiGenericServiceViaHttpClientService
    ) {


  }

  private test(): void{

    this.apiGenericServiceService.get<any>('https://localhost:7288/WeatherForecast').then(result => {

    console.log(result);


    });
  }
}
