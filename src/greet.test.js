import { greet } from './greet';

describe('greet', () => {
    let prompt, alert;

    beforeEach(() => {
        prompt = window.prompt;
        alert = window.alert;

        window.prompt = jest.fn();
        window.alert = jest.fn();
    });

    afterEach(() => {
        window.prompt = prompt;
        window.alert = alert;
    });

    it ('shoud return Agu if small age', () => {
        window.prompt.mockReturnValue('4');
        greet();
        expect(window.alert).toHaveBeenCalledWith('Агу');
    })
})