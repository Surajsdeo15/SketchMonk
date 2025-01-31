import express from  'express';
import { TaskAddController } from '../Controllers/TaskAdd.Contrller.js';


const TaskRouter=express.Router();


TaskRouter.post('/add',TaskAddController)

export default TaskRouter;