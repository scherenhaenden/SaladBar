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
    //this.test();
    this.getDockerImages();

  }

  private test(): void{

    this.apiGenericServiceService.get<any>('https://localhost:7288/WeatherForecast').then(result => {

    console.log(result);


    });
  }

  public dockerImages: RootObject[] = [];

  // Get Draft of Load Docker Images
  private async getDockerImages(): Promise<void> {

    const result = await this.apiGenericServiceViaHttpClientService.get('https://localhost:7288/Docker/GetImages');
    console.log('result', result);

    this.dockerImages = result;

      //const hhththth = (await this.apiGenericServiceService.get<any>('https://localhost:7288/Docker/GetImages')).json();
      //console.log(hhththth);
  }


}
export interface RootObject {
  containers: number;
  id: string;
  created: Date;
  labels: object;
  repoDigests: string[];
  repoTags: string[];
  sharedSize: number;
  size: number;
  virtualSize: number;
  parentId: string;
}
