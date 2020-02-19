import { ApplicationDetailModule } from './application-detail.module';

describe('AppModule', () => {
    let appModule: ApplicationDetailModule;

    beforeEach(() => {
        appModule = new ApplicationDetailModule();
    });

    it('should create an instance', () => {
        expect(appModule).toBeTruthy();
    });
});
