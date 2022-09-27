import { Component, OnInit } from '@angular/core';
import { CardViewModel } from 'src/app/models/card-view-model';
import { LinkTextPairModel } from 'src/app/models/link-text-pair-model';
import { DockerCommonServicesService } from '../../services/docker-common-services.service';
import { DockerContainerModel } from '../models/docker-container-model';
import { DockerNetworkModel } from '../models/docker-network-model';

@Component({
  selector: 'app-docker-containers-list-view',
  templateUrl: './docker-containers-list-view.component.html',
  styleUrls: ['./docker-containers-list-view.component.css']
})
export class DockerContainersListViewComponent implements OnInit {

  constructor(private dockerCommonServicesService: DockerCommonServicesService) {
    this.getDockerContainers();
  }

  ngOnInit(): void {
  }

  public dockerNetworkModel: DockerContainerModel[] = [];
  public cardView: CardViewModel[] = [];

  // Get Draft of Load Docker Images
  private async getDockerContainers(): Promise<void> {

    const result = await this.dockerCommonServicesService.getDockerContainers();
    console.log('result', result);

    for (var image of result) {
      const cardModel =  this.transFormDockerNetworkModelToCardViewModel(image);
      this.cardView.push(cardModel);
    }
    //this.dockerImages = result;
  }


  private transFormDockerNetworkModelToCardViewModel(dockerContainer: DockerContainerModel): CardViewModel {
    const cardView = new CardViewModel();
    cardView.title = dockerContainer.id?.toString();

    cardView.subtitle1 = dockerContainer.names.join()?.toString();
    cardView.subtitle2 = dockerContainer.command?.toString();

    cardView.cardText1 = dockerContainer.id?.toString();
    cardView.cardText2 = dockerContainer.state?.toString();
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
