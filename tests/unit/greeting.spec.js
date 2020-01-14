// create an extended `Vue` constructor
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import hooks from '@u3u/vue-hooks'
Vue.use(hooks)
Vue.use(VueCompositionApi)
import { shallowMount } from '@vue/test-utils'
import store from '@/store'

import Greeting from '@/components/Greeting.vue'

describe('Greeting.vue', () => {
  it('renders correct greeting using real store', () => {
    const msg = 'Greeting: hello'
    const wrapper = shallowMount(Greeting, {
      store,
    })
    expect(wrapper.text()).toEqual(msg)
  })

  it('renders correct greeting using mocked store', () => {
    const msg = 'Greeting: world'
    const wrapper = shallowMount(Greeting, {
      mocks: {
        $store: {
          state: {
            greeting: 'world',
          },
        },
      },
    })
    expect(wrapper.text()).toEqual(msg)
  })
})
