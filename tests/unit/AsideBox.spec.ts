import { shallowMount } from "@vue/test-utils";
import AsideBox from "@/components/AsideBox/AsideBox.vue";
import { toCurrency } from '@/utils/utils';

describe("AsideBox.vue", () => {
  it("renders props when passed", () => {
    const data = '5';
    const formatting = 'currency';
    const heading = 'Loan';
    const wrapper = shallowMount(AsideBox, {
      propsData: { data, heading, formatting }
    });
    
    expect(wrapper.props().data).toBe('5');
    expect(wrapper.props().heading).toBe('Loan');
    expect(wrapper.props().formatting).toBe('currency');
  });

  it("renders message when incorrect props are passed", () => {
    const data = 'wrong';
    const formatting = 'currency';
    const expectedResult = 'Please fill out the form'
    const wrapper = shallowMount(AsideBox, {
      propsData: { data, formatting }
    });
    
    expect(wrapper.text()).toContain(expectedResult);
  });

});
