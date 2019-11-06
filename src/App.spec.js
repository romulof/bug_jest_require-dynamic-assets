import { mount } from '@vue/test-utils';
import App from '@/App';

describe('App', () => {
    it('Should resolve logo image', () => {
        const wrapper = mount(App);
        expect(wrapper.vm.getLogo()).toBe('x');
    });
});
