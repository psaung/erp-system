import React from 'react'
import { Reducer } from 'redux-testkit'

import reducers from './../../reducers/counter'
import rootSagas from './../../sagas/counter-saga'

const initialState = 0;

describe('Sagas scenario', () => {
  it('should have initial state', () => {
    expect(reducers(0, { type: null })).toBe(initialState) 
  })

  it('increment the counter', () => {
    const gen = rootSagas()
    console.log(gen.next().value)
  })

  it('decrement the counter', () => {

  })
})
