import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar from '../Navbar.vue'

describe('Navbar', () => {
  it('renders the component', () => {
    const wrapper = mount(Navbar);
    expect(wrapper.exists()).toBe(true);
  });
})
