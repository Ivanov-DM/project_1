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

    it ('shoud show Agu for small age', () => {
        greet(4);
        expect(window.alert).toHaveBeenCalledWith('Агу');
    });

    //it ('shoud show Privet for teen age', () => {
    //    greet(14);
    //    expect(window.alert).toHaveBeenCalledWith('Привет');
    //})
})