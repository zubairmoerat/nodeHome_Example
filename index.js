import express from 'express'
import axios from 'axios'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const router = express.Router()
const port = +process.env.PORT || 4000
const baseURL = ''