export class DockerImageModel {
  public containers!: number;
  public id!: string;
  public created!: Date;
  public labels!: object;
  public repoDigests!: string[];
  public repoTags!: string[];
  public sharedSize!: number;
  public size!: number;
  public virtualSize!: number;
  public parentId!: string;
}
