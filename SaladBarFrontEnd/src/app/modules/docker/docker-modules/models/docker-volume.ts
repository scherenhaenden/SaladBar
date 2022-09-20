export interface DockerVolume {
  name:       string;
  driver:     string;
  mountpoint: string;
  createdAt:  string;
  scope:      string;
  labels:     Labels;
  options:    Labels;
  status:     Labels;
  usageData:  UsageData;
}

export interface Labels {
  additionalProp1: string;
  additionalProp2: string;
  additionalProp3: string;
}

export interface UsageData {
  refCount: number;
  size:     number;
}
