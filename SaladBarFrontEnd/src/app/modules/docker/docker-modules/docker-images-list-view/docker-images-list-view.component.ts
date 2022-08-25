import { Component, OnInit } from '@angular/core';
import { ApiGenericServiceViaHttpClientService } from 'src/app/services/api/api-generic-service-via-http-client.service';
import { DockerCommonServicesService } from '../../services/docker-common-services.service';
import { CardViewModel } from '../models/card-view-model';
import { DockerImageModel } from '../models/docker-image-model';
import { LinkTextPairModel } from '../models/link-text-pair-model';

@Component({
  selector: 'app-docker-images-list-view',
  templateUrl: './docker-images-list-view.component.html',
  styleUrls: ['./docker-images-list-view.component.css']
})
export class DockerImagesListViewComponent implements OnInit {

  constructor(private dockerCommonServicesService: DockerCommonServicesService) {
    this.getDockerImages();
  }

  ngOnInit(): void {
  }

  public dockerImages: DockerImageModel[] = [];
  public cardView: CardViewModel[] = [];

  // Get Draft of Load Docker Images
  private async getDockerImages(): Promise<void> {

    const result = await this.dockerCommonServicesService.getDockerImages();
    console.log('result', result);

    for (var image of result) {
      const cardModel =  this.transFormDockerImageModelToCardViewModel(image);
      this.cardView.push(cardModel);
    }
    this.dockerImages = result;
  }

  private transFormDockerImageModelToCardViewModel(dockerImage: DockerImageModel): CardViewModel {
    const cardView = new CardViewModel();
    cardView.title = dockerImage.containers?.toString();

    cardView.subtitle1 = dockerImage.size?.toString();
    cardView.subtitle2 = dockerImage.virtualSize?.toString();

    cardView.cardText1 = dockerImage.id?.toString();
    cardView.cardText2 = dockerImage.created?.toString();
    cardView.cardText3 = dockerImage.repoDigests?.toString();
    cardView.cardText4 = dockerImage.sharedSize?.toString();
    cardView.cardText5 = dockerImage.created?.toString();

    const linkTextPairModel1: LinkTextPairModel = {
      link : '#',
      text: 'More Info'
    };
    const linkTextPairModel2: LinkTextPairModel = {
      link : '#',
      text: 'Edit'
    };


    cardView.cardLink1 = linkTextPairModel1;
    cardView.cardLink2 = linkTextPairModel2;
    return cardView;
  }
}
