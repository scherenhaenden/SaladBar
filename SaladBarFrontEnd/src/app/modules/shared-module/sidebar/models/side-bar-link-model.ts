import { IconTypeModel } from "./icon-type-model";

export class SideBarLinkModel {
  public nameDescription!: string;
  public link!: string;
  /** Obsolete */
  public icon!: string;
  public iconTypeModel!: IconTypeModel;
  public isLinkActive = false;
}
