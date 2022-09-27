import { Component, OnInit } from '@angular/core';
import { DockerCommonServicesService } from '../../services/docker-common-services.service';
import { CardViewModel } from '../../../../models/card-view-model';
import { DockerNetworkModel } from '../models/docker-network-model';
import { LinkTextPairModel } from '../../../../models/link-text-pair-model';

@Component({
  selector: 'app-docker-network-list-view',
  templateUrl: './docker-network-list-view.component.html',
  styleUrls: ['./docker-network-list-view.component.css']
})
export class DockerNetworkListViewComponent implements OnInit {

  constructor(private dockerCommonServicesService: DockerCommonServicesService) {
    this.getDockerNetworks();
  }

  ngOnInit(): void {
  }

  public dockerNetworkModel: DockerNetworkModel[] = [];
  public cardView: CardViewModel[] = [];

  // Get Draft of Load Docker Images
  private async getDockerNetworks(): Promise<void> {

    const result = await this.dockerCommonServicesService.getDockerNetworks();
    console.log('result', result);

    for (var image of result) {
      const cardModel =  this.transFormDockerNetworkModelToCardViewModel(image);
      this.cardView.push(cardModel);
    }
    //this.dockerImages = result;
  }


  private transFormDockerNetworkModelToCardViewModel(dockerImage: DockerNetworkModel): CardViewModel {
    const cardView = new CardViewModel();
    cardView.title = dockerImage.containers?.toString();

    cardView.subtitle1 = dockerImage.name?.toString();
    cardView.subtitle2 = dockerImage.internal?.toString();

    cardView.cardText1 = dockerImage.id?.toString();
    cardView.cardText2 = dockerImage.ingress?.toString();
    /*cardView.cardText3 = dockerImage.repoDigests?.toString();
    cardView.cardText4 = dockerImage.sharedSize?.toString();
    cardView.cardText5 = dockerImage.created?.toString();*/

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
