export class DockerNetworkModel {
  id!: string;
  name!: string;
  driver!: string;
  scope!: string;
  enableIPv6!: boolean;
  internal!: boolean;
  attachable!: boolean;
  ingress!: boolean;
  ipam!: IPAM;
  options!: Options;
  labels!: Labels;
  containers!: Containers;
}

// TODO: tech deb
// TODO: see what do I have to keep from here and on

export interface Containers {
}

export interface IPAM {
    driver:  string;
    options: Containers | null;
    config:  Config[];
}

export interface Config {
    subnet:     string;
    ipRange:    null;
    gateway:    string;
    auxAddress: null;
}

export interface Labels {
    "created_by.minikube.sigs.k8s.io"?: string;
    "com.docker.compose.network"?:      string;
    "com.docker.compose.project"?:      string;
    "com.docker.compose.version"?:      string;
}

export interface Options {
    "--icc"?:                                          string;
    "--ip-masq"?:                                      string;
    "com.docker.network.driver.mtu"?:                  string;
    "com.docker.network.bridge.default_bridge"?:       string;
    "com.docker.network.bridge.enable_icc"?:           string;
    "com.docker.network.bridge.enable_ip_masquerade"?: string;
    "com.docker.network.bridge.host_binding_ipv4"?:    string;
    "com.docker.network.bridge.name"?:                 string;
}

