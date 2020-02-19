import { ApplicationViewModule } from './application.module';

describe('AppModule', () => {
    let appModule: ApplicationViewModule;

    beforeEach(() => {
        appModule = new ApplicationViewModule();
    });

    it('should create an instance', () => {
        expect(appModule).toBeTruthy();
    });
});
