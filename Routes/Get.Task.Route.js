import express from 'express';
import { TaskGetController } from '../Controllers/Get.Task.Coontrollers.js';

const GetTaskRoute=express.Router();


GetTaskRoute.get('/get',TaskGetController)


export default GetTaskRoute;