import { LandingModule } from './landing.module';

describe('LoginModule', () => {
    let loginModule: LandingModule;

    beforeEach(() => {
        loginModule = new LandingModule();
    });

    it('should create an instance', () => {
        expect(loginModule).toBeTruthy();
    });
});
