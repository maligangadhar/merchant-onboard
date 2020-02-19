import { ActionViewModule } from './action-view.module';

describe('ActionModule', () => {
    let appModule: ActionViewModule;

    beforeEach(() => {
        appModule = new ActionViewModule();
    });

    it('should create an instance', () => {
        expect(appModule).toBeTruthy();
    });
});
