import { ShareMatModule } from './share-mat.module';

describe('ShareMatModule', () => {
  let shareMatModule: ShareMatModule;

  beforeEach(() => {
    shareMatModule = new ShareMatModule();
  });

  it('should create an instance', () => {
    expect(shareMatModule).toBeTruthy();
  });
});
