import { DockerVolume } from './docker-volume';

describe('DockerVolume', () => {
  it('should create an instance', () => {
    expect(new DockerVolume()).toBeTruthy();
  });
});
