import express from 'express';
import cors from 'cors';
import "reflect-metadata";
import './database';
import 'dotenv/config';

import { routes } from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3333,()=>{
    console.log('Server online')
})