import { BootstrapFamily, FeatherFamily, FontAwesomeFamily, IconFamily } from "./icon-family";

export class IconTypeModel{


  constructor(iconFamily: IconFamily.Feather, iconName: FeatherFamily );
  constructor(iconFamily: IconFamily.FontAwesome, iconName: FontAwesomeFamily );
  constructor(iconFamily: IconFamily.Bootstrap, iconName: BootstrapFamily );

  // common implementation
  constructor(  iconFamily? : IconFamily.Feather| IconFamily.FontAwesome| IconFamily.Bootstrap, iconName? : FeatherFamily| FontAwesomeFamily| BootstrapFamily ){

    this.iconFamily = iconFamily;
    this.iconName = iconName;

  }

  public iconName!: FeatherFamily| FontAwesomeFamily| BootstrapFamily | undefined;
  public iconFamily!: IconFamily | undefined;
}
