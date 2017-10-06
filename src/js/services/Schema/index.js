import { Schema, arrayOf, normalize } from 'normalizr'

export const userSchema = new Schema('users', {
  idAttribute: 'id'
})

export const userSchemaArray = arrayOf(userSchema)
