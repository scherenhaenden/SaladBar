import { Component, OnInit } from '@angular/core';
import { ApiGenericServiceViaHttpClientService } from 'src/app/services/api/api-generic-service-via-http-client.service';
import { DockerCommonServicesService } from '../../services/docker-common-services.service';
import { CardViewModel } from '../../../../models/card-view-model';
import { DockerImageModel } from '../models/docker-image-model';
import { LinkTextPairModel } from '../../../../models/link-text-pair-model';

import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-docker-images-list-view',
  templateUrl: './docker-images-list-view.component.html',
  styleUrls: ['./docker-images-list-view.component.css', './docker-images-list-view.component.scss']
})
export class DockerImagesListViewComponent implements OnInit {


  public closeModal!: string;

  constructor(private dockerCommonServicesService: DockerCommonServicesService,
    private modalService: NgbModal) {
    this.getDockerImages();
  }

  ngOnInit(): void {
  }

  public triggerModal(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      console.log('res', res);
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
    this.changeZIndex();
  }

  // Get html element ngb-modal-backdrop and change its z-index
  private changeZIndex(): void {
    const element = document.getElementsByTagName('ngb-modal-backdrop');
    console.log('element', element);
    element[0].setAttribute('style', 'z-index: 100');
  }



  private getDismissReason(reason: any): string {
    console.log('reason', reason);
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  public dockerImages: DockerImageModel[] = [];
  public cardView: CardViewModel[] = [];
  public showsImagesWithoutParentId: boolean = false;
  public showsImagesDanling: boolean = false;

  // Get Draft of Load Docker Images
  public async getDockerImages(): Promise<void> {

    const result = await this.dockerCommonServicesService.getDockerImages();
    console.log('result', result);

    for (var image of result) {
      const cardModel =  this.transFormDockerImageModelToCardViewModel(image);
      this.cardView.push(cardModel);
    }
    this.dockerImages = result;
    this.showsImagesWithoutParentId = false;    
    this.showsImagesDanling = false; 
  }

  // Get only Unused Images
  public async getImagesWithoutParentId(): Promise<void> {
    const result = await this.dockerCommonServicesService.getDockerImagesWithoutParentId();
    console.log('result', result);

    for (var image of result) {
      const cardModel =  this.transFormDockerImageModelToCardViewModel(image);
      this.cardView.push(cardModel);
    }
    this.dockerImages = result;
    this.showsImagesWithoutParentId = true;
    this.showsImagesDanling = false; 
  }

   // Get only Unused Images
   public async getImagesDanling(): Promise<void> {
    const result = await this.dockerCommonServicesService.getDockerImagesDanglin();
    console.log('result', result);

    for (var image of result) {
      const cardModel =  this.transFormDockerImageModelToCardViewModel(image);
      this.cardView.push(cardModel);
    }
    this.dockerImages = result;
    this.showsImagesWithoutParentId = false;    
    this.showsImagesDanling = true; 
  }

  // Delete all images dangling
  public async deleteAllImagesDangling(): Promise<void> {
    const result = await this.dockerCommonServicesService.deleteAllImagesDangling();
    console.log('result', result);
  }

  // Delete all images without parent id
  public async deleteAllImagesWithoutParentId(): Promise<void> {
    const result = await this.dockerCommonServicesService.deleteAllImagesWithoutParentId();
    console.log('result', result);
  }

  private transFormDockerImageModelToCardViewModel(dockerImage: DockerImageModel): CardViewModel {
    const cardView = new CardViewModel();
    cardView.title = 'id: ' + dockerImage.id?.toString();

    cardView.subtitle1 = 'size: ' + this.convertSizeToKBMBGBTB(dockerImage.size?.toString());
    cardView.subtitle2 = 'virtual size: ' + this.convertSizeToKBMBGBTB(dockerImage.virtualSize?.toString());    

    cardView.cardText1 = 'Created: ' + this.convertDateToUserFriendlyDate(dockerImage.created);
    
    cardView.cardText2 = 'Used: ' + (this.isStringEmptyOrNullUndefined(dockerImage.parentId) ? 'No' : 'Yes');
    cardView.cardText3 = 'Obsolete: ' + this.getRepoDigests(dockerImage.repoDigests);
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

  // Is string empty, null or undefined 
  private isStringEmptyOrNullUndefined(value: string | null | undefined): boolean { 
    if (value === null || value === undefined || value === '') {
      return true;
    }
    return false;
  }


  // If repoDifests is null or undefined or empty return a string equals to 'unused' returns empty string
  private getRepoDigests(repoDigests: string[] | null | undefined): string {
    if (repoDigests === null || repoDigests === undefined || repoDigests.length === 0) {
      return 'unused';
    } else {
      return ''
    }
  }

  //Convert Javascript date to user friendly date
  private convertDateToUserFriendlyDate(date: Date| null| undefined| string): string {
    if(date === null || date === undefined) {
      return '';
    }

    // If date is string convert to date
    if (typeof date === 'string') {
      date = this.convertStringToDate(date);
    }

    return date.toDateString();
  }

  // Get type of object
  private getTypeOfObject(object: any): string {
    return typeof object;
  }

  // Convert string date to date
  private convertStringToDate(date: string): Date {
    return new Date(date);
  }

  // Decide by the size if number needs to be converted to KB, MB, GB or TB
  private convertSizeToKBMBGBTB(size: number| string): string {

    if (typeof size === 'string') {
      size = this.convertStringToNumber(size);
    }
    if (size < 1024) {
      return size + ' B';
    } else if (size < 1048576) {
      return (size / 1024).toFixed(2) + ' KB';
    } else if (size < 1073741824) {
      return (size / 1048576).toFixed(2) + ' MB';
    } else if (size < 1099511627776) {
      return (size / 1073741824).toFixed(2) + ' GB';
    } else {
      return (size / 1099511627776).toFixed(2) + ' TB';
    }
  }


  // Convert string to number
  private convertStringToNumber(value: string): number {
    return Number(value);
  }

  // Convert Sizes from Bytes to KB
  private convertBytesToKB(bytes: number): number {
    return bytes / 1024;
  }

  // Convert Sizes from KB to MB
  private convertKBToMB(kb: number): number {
    return kb / 1024;
  }

  // Convert Sizes from MB to GB
  private convertMBToGB(mb: number): number {
    return mb / 1024;
  }

  // Convert Sizes from GB to TB
  private convertGBToTB(gb: number): number {
    return gb / 1024;
  }

}
