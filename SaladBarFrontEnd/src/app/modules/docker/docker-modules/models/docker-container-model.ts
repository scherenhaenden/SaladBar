export interface DockerContainerModel {
  id:              string;
  names:           string[];
  image:           string;
  command:         string;
  created:         Date;
  status:          string;
  ports:           Port[];
  sizeRw:          number;
  sizeRootFs:      number;
  labels:          Labels;
  networkSettings: NetworkSettings;
  mounts:          Mount[];
  state:           string;
  imageId:         string;
}

export interface Labels {
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

export interface Mount {
  type:        string;
  name:        string;
  source:      string;
  destination: string;
  driver:      string;
  mode:        string;
  rw:          boolean;
  propagation: string;
}

export interface NetworkSettings {
  networks: Networks;
}

export interface Networks {
  additionalProp1: AdditionalProp;
  additionalProp2: AdditionalProp;
  additionalProp3: AdditionalProp;
}

export interface AdditionalProp {
  ipamConfig:          IPAMConfig;
  links:               string[];
  aliases:             string[];
  networkID:           string;
  endpointID:          string;
  gateway:             string;
  ipAddress:           string;
  ipPrefixLen:         number;
  iPv6Gateway:         string;
  globalIPv6Address:   string;
  globalIPv6PrefixLen: number;
  macAddress:          string;
  driverOpts:          Labels;
}

export interface IPAMConfig {
  iPv4Address:  string;
  iPv6Address:  string;
  linkLocalIPs: string[];
}

export interface Port {
  ip:          string;
  privatePort: number;
  publicPort:  number;
  type:        string;
}
