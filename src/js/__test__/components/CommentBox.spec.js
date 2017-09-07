import { shallowComponent, mountComponent } from './../test_helper'

import { CommentBox } from './../../components/'

describe('<CommentBox />', () => {
  let component

  beforeEach(function() {
    component = mountComponent(CommentBox).enzymeWrapper
  })

  afterEach(function() {
    component.unmount()
  })

  it('should render self and it', () => {
    expect(component).toBeDefined()
    component.find('textarea').simulate('change', { target: {
      value: 'new comment' } })
    expect(component.hasClass('comment-box')).toBeTruthy()
    expect(component.find('textarea').get(0).value).toBe('new comment')
    expect(component.find('textarea').length).toBe(1)
    expect(component.find('button').length).toBe(1)
  })

  it('should clear input after the submit', () => {
    component.find('textarea').simulate('change', { target: {
      value: 'new comment' } })
    expect(component.find('textarea').get(0).value).toBe('new comment')
    component.find('button').simulate('click')
    expect(component.find('textarea').get(0).value).toBe('')
  })
})
