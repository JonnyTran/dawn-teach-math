import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar from '../Navbar.vue'
import { createPinia, defineStore, setActivePinia } from 'pinia'
import { useTeacherStore } from '@/stores/teacher'
import { useCourseStore } from '@/stores/course'

import mitt from 'mitt'
// import { beforeEach } from 'node:test'

describe('Navbar', () => {
  let pinia;
  let teacherStore;
  let courseStore;
  let emitter;

  beforeEach(() => {
    pinia = createPinia();
    setActivePinia(pinia);

    teacherStore = useTeacherStore();
    courseStore = useCourseStore()

    emitter = mitt();
  });

  it('renders the component', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [pinia],
        mocks: {
          $emitter: emitter
        }
      }
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('updates the disabled dates', () => {
    const wrapper = mount(Navbar);
    emitter.emit('update-disabled-dates');
    expect(wrapper.vm.disabledDates(new Date())).toBe(true);
  });

  it('updates the unit title', () => {
    const wrapper = mount(Navbar);
    emitter.emit('update-unit-title', { unitTitle: 'Test Unit' });
    expect(wrapper.vm.unitTitle).toBe('Test Unit');
  });

  it('updates the section and lesson IDs when the route changes', async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [pinia],
        mocks: {
          $route: {
            params: {
              sectionId: 'test-section',
              lessonId: 'test-page'
            }
          }
        }
      }
    });

    await wrapper.vm.$nextTick();

    expect(courseStore.id).toBe('test-section');
    expect(courseStore.lesson).toBe('test-page');

    await courseStore.updateSectionAndLessonIds({
      sectionId: 'new-section',
      lessonId: 'new-page'
    });

    expect(wrapper.vm.sectionId).toBe('new-section');
    expect(wrapper.vm.lessonId).toBe('new-page');
  });
})
