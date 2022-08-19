import { BootstrapFamily, FeatherFamily, IconFamily } from './icon-family';
import { IconTypeModel } from './icon-type-model';

describe('IconTypeModel For Feather', () => {
  it('should create an instance', () => {
    expect(new IconTypeModel(IconFamily.Feather, FeatherFamily.Home)).toBeTruthy();
  });
});

describe('IconTypeModel For Bootstrap', () => {
  it('should create an instance', () => {
    expect(new IconTypeModel( IconFamily.Bootstrap, BootstrapFamily.Git)).toBeTruthy();
  });

});
