import { Component, OnInit } from '@angular/core';
import { ApiGenericServiceViaHttpClientService } from 'src/app/services/api/api-generic-service-via-http-client.service';
import { DockerImageModel } from '../models/docker-image-model';

@Component({
  selector: 'app-docker-images-board',
  templateUrl: './docker-images-board.component.html',
  styleUrls: ['./docker-images-board.component.css']
})
export class DockerImagesBoardComponent implements OnInit {

  constructor(private apiGenericServiceViaHttpClientService: ApiGenericServiceViaHttpClientService) {
    this.getDockerImages();
  }

  ngOnInit(): void {
  }



  public dockerImages: DockerImageModel[] = [];

  // Get Draft of Load Docker Images
  private async getDockerImages(): Promise<void> {

    const result = await this.apiGenericServiceViaHttpClientService.get('https://localhost:7288/Docker/GetImages');
    console.log('result', result);

    this.dockerImages = result;
  }


}
