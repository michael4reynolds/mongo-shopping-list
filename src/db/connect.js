import mongoose from 'mongoose'
import env from './environment'
import config from './config'

mongoose.connect(config[env].url)
