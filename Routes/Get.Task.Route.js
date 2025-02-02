import express from 'express';
import { DeleteTask, TaskGetController } from '../Controllers/Get.Task.Coontrollers.js';
import { CompleteGetController, DragCompletedTask } from '../Controllers/Complete.GetController.js';

const GetTaskRoute=express.Router();


GetTaskRoute.get('/get',TaskGetController);
GetTaskRoute.get('/get/complete',CompleteGetController);
GetTaskRoute.post('/delete/:id',DeleteTask);
GetTaskRoute.put('/task/:taskID',DragCompletedTask);



export default GetTaskRoute;