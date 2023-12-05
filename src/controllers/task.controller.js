import Task from '../models/Task';

export const renderTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    // Con esta función, se le agrega +1 al index...
    const tasksWithIncrementedIndex = tasks.map((task, index) => {
      return { ...task, displayIndex: index + 1 };
    });

    // res.render('index', { tasks: tasks });
    res.render('index', { tasks: tasksWithIncrementedIndex });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (req, res) => {
  const task = Task(req.body);

  await task.save();

  res.redirect('/');
};

export const about = (req, res) => {
  res.render('about');
};
