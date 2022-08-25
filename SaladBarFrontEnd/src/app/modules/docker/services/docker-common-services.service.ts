import { Injectable } from '@angular/core';
import { ApiGenericServiceViaHttpClientService } from 'src/app/services/api/api-generic-service-via-http-client.service';
import { DockerImageModel } from '../docker-modules/models/docker-image-model';
import { DockerNetworkModel } from '../docker-modules/models/docker-network-model';

@Injectable({
  providedIn: 'root'
})
export class DockerCommonServicesService {

  constructor(private apiGenericServiceViaHttpClientService: ApiGenericServiceViaHttpClientService) { }


  // Generate Method to get the docker images
  public async getDockerImages(): Promise<DockerImageModel[]> {

    const result = await this.apiGenericServiceViaHttpClientService.get('https://localhost:7288/Docker/GetImages') as Promise<DockerImageModel[]>;
    return result;
  }

    // Generate Method to get the docker images
  public async getDockerVolumes(): Promise<object[]> {

    const result = await this.apiGenericServiceViaHttpClientService.get('https://localhost:7288/Docker/GetVolumes') as Promise<DockerImageModel[]>;
    return result;
  }

      // Generate Method to get the docker images
  public async getDockerNetworks(): Promise<DockerNetworkModel[]> {

    const result = await this.apiGenericServiceViaHttpClientService.get('https://localhost:7288/Docker/GetNetworks') as Promise<DockerNetworkModel[]>;
    return result;
  }

    // Generate Method to get the docker images
  public async getDockerContainers(): Promise<object[]> {

    const result = await this.apiGenericServiceViaHttpClientService.get('https://localhost:7288/Docker/GetContainers') as Promise<DockerImageModel[]>;
    return result;
  }
}
