import { shallowComponent } from './../test_helper'

import { App } from './../../components/'

describe('App', () => {
  it('show the correct text', () => {
    const component = shallowComponent(App)

    expect(component.text()).toContain('React simple starter')
  })
})
