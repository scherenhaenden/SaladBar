import { Component, OnInit } from '@angular/core';
import { CardViewModel } from 'src/app/models/card-view-model';
import { LinkTextPairModel } from 'src/app/models/link-text-pair-model';
import { DockerCommonServicesService } from '../../services/docker-common-services.service';
import { DockerVolume } from '../models/docker-volume';

@Component({
  selector: 'app-docker-volumes-list-view',
  templateUrl: './docker-volumes-list-view.component.html',
  styleUrls: ['./docker-volumes-list-view.component.css']
})
export class DockerVolumesListViewComponent implements OnInit {

  constructor(private dockerCommonServicesService: DockerCommonServicesService) {
    this.getDockerVolumes();
  }

  ngOnInit(): void {
  }

  public cardView: CardViewModel[] = [];

  // Get Draft of Load Docker Images
  private async getDockerImages(): Promise<void> {

    const result = await this.dockerCommonServicesService.getDockerVolumes();
    console.log('result', result);

    for (var image of result) {
      const cardModel =  this.transFormDockerNetworkModelToCardViewModel(image);
      this.cardView.push(cardModel);
    }
    //this.dockerImages = result;
  }


  private transFormDockerNetworkModelToCardViewModel(dockerVolume: DockerVolume): CardViewModel {
    const cardView = new CardViewModel();
    cardView.title = dockerVolume.name?.toString();

    cardView.subtitle1 = dockerVolume.driver?.toString();
    cardView.subtitle2 = dockerVolume.labels?.toString();

    cardView.cardText1 = dockerVolume.mountpoint?.toString();
    cardView.cardText2 = dockerVolume.usageData?.toString();
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
