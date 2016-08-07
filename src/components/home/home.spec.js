import {renderComponent, expect} from './../../test/test_helper';
import Home from './index';

describe('Home', () => {
    let component;
    beforeEach(() => {
        component = renderComponent(Home);
    });

    it('has div with class home', () => {
        expect(component).to.have.class ('home');
    });
});
