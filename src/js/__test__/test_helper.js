import React from 'react'
// if react >= 15.5, in addtion to enzyme u have to installed react-test-renderer and react-dom
import { shallow, mount } from 'enzyme' 
import configureMockStore from 'redux-mock-store'

import reducers from './../reducers/'


/* 
 * https://github.com/airbnb/enzyme/issues/465#issuecomment-227697726
 * you can create component with 3 different methods that enzyme provides
 * 1. Shallow
 * -  Real unit test(isolation, no children render) Can't test for a ref() method. Does not maintain an internal instance can't hold a ref.
 * 2. Mount
 * -  only way to test componentDidMount and componentDidUpdate. Full rendering with child components.
 * 3. Renders(rarely used)
 * -  only calls render but renders all children. Use this if you dont wnat to test about life cycle method.
 */

export function mountComponent(ComponentClass, props= {}, state= {}) {
  const store = configureMockStore(state);
  const enzymeWrapper = mount(<ComponentClass {...props} state={store} />)
  return {
    props,
    enzymeWrapper 
  }
}

export function shallowComponent(ComponentClass, props= {}) { 
  return shallow(<ComponentClass {...props} />)
}
