const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')
const { Schema } = mongoose
const { defaultFields, defaultSchemaOptions } = require('./model-utils')

const gameSchema = new Schema({
  _id: { type: Schema.Types.String, required: true, default: uuidv4 },
  gameName: { type: Schema.Types.String, required: true },
  slug: { type: Schema.Types.String, required: true},
  description: { type: Schema.Types.String, required: true },
  thumbnail: { type: Schema.Types.String, required: true },
  gamePreview: { type: Schema.Types.String, required: true },
  rating: { type: Schema.Types.String, required: true },
  developer: { type: Schema.Types.String, required: true },
  technology: { type: Schema.Types.String, required: true },
  platform: { type: Schema.Types.String, required: true },
  shortDescription: { type: Schema.Types.String, required: true },
  status: { type: Schema.Types.String, required: true },
  categories: [ { type: Schema.Types.String, ref: 'category', required: true } ],
  url: { type: Schema.Types.String, required: true },
  isSupportMobile: { type: Schema.Types.Boolean, required: true },
  isSupportDesktop: { type: Schema.Types.Boolean, required: true },
  likes: { type: Schema.Types.Number, required: false, default: 0 },
  disLikes: { type: Schema.Types.Number, required: false, default: 0 },
  ...defaultFields
}, {
  ...defaultSchemaOptions
})

const Game = mongoose.model('game', gameSchema, 'games')

module.exports = Game
