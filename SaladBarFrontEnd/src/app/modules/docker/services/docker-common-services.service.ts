import { DockerVolume } from './../docker-modules/models/docker-volume';
import { Injectable } from '@angular/core';
import { ApiGenericServiceViaHttpClientService } from 'src/app/services/api/api-generic-service-via-http-client.service';
import { DockerImageModel } from '../docker-modules/models/docker-image-model';
import { DockerNetworkModel } from '../docker-modules/models/docker-network-model';
import { DockerContainerModel } from '../docker-modules/models/docker-container-model';

@Injectable({
  providedIn: 'root'
})
export class DockerCommonServicesService {

  constructor(private apiGenericServiceViaHttpClientService: ApiGenericServiceViaHttpClientService) { }


  // Generate Method to get the docker images
  public async getDockerImages(): Promise<DockerImageModel[]> {

    const result = await this.apiGenericServiceViaHttpClientService.get('/Docker/GetImages') as Promise<DockerImageModel[]>;
    return result;
  }

  // Get Images without parent id
  public async getDockerImagesWithoutParentId(): Promise<DockerImageModel[]> {

    const result = await this.apiGenericServiceViaHttpClientService.get('/Docker/GetImagesWithoutParentId') as Promise<DockerImageModel[]>;
    return result;
  }

  // Get Dangling Images
  public async getDockerImagesDanglin(): Promise<DockerImageModel[]> {

    const result = await this.apiGenericServiceViaHttpClientService.get('/Docker/GetImagesDangling') as Promise<DockerImageModel[]>;
    return result;
  }

  // Delete all images dangling
  public async deleteAllImagesDangling(): Promise<object> {
    const result = await this.apiGenericServiceViaHttpClientService.get('/Docker/DeleteAllImagesDanling') as Promise<object>;
    return result;
  }

  // Delete all images without parent id
  public async deleteAllImagesWithoutParentId(): Promise<object> {
    const result = await this.apiGenericServiceViaHttpClientService.get('/Docker/DeleteAllImagesWithoutParentId') as Promise<object>;
    return result;
  }



    // Generate Method to get the docker images
  public async getDockerVolumes(): Promise<DockerVolume[]> {

    const result = await this.apiGenericServiceViaHttpClientService.get('/Docker/GetVolumes') as Promise<DockerVolume[]>;
    return result;
  }

      // Generate Method to get the docker images
  public async getDockerNetworks(): Promise<DockerNetworkModel[]> {

    const result = await this.apiGenericServiceViaHttpClientService.get('/Docker/GetNetworks') as Promise<DockerNetworkModel[]>;
    return result;
  }

    // Generate Method to get the docker images
  public async getDockerContainers(): Promise<DockerContainerModel[]> {

    const result = await this.apiGenericServiceViaHttpClientService.get('/Docker/GetContainers') as Promise<DockerContainerModel[]>;
    return result;
  }
}
