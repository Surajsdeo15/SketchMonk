import { Task } from "../Models/TaskModels.js";

export const TaskGetController = async (req, res) => {
  try {
    const tasks = await Task.find({ status: "progress" });
    console.log("Tasks under progress:", tasks);
    // console.log(req.url);
    

    if (!tasks) {
      return res.status(400).json({ message: "No Task Found", success: false });
    }

    // Format the date for each task
    const formattedTasks = tasks.map((task) => {
      // Assuming task.date is the field where the date is stored
      const taskDate = new Date(task.date); // Convert task.date to a Date object
      const formattedDate = taskDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

      return {
        ...task.toObject(), // Convert Mongoose task document to plain object
        date: formattedDate, // Replace the task's date with the formatted date
      };
    });

    return res.status(201).json({
      message: "Tasks Found",
      success: true,
      tasks: formattedTasks, // Return the tasks with the formatted date
    });

  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const DeleteTask= async(req,res)=>{
  const {id}=req.params;
  console.log(id);
  
  try {
      const task=await Task.findByIdAndDelete(id);
      if(!task)
      {
        return res.status(400).json({ message: "No Task delete", success: false });
      }
   return res.status(200).json({ message: " Task Delete", success: true });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
    
  }
}
