import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import { Task, Priority } from '../types';

interface TaskListProps {
  tasks: Task[];
  onTaskStatusChange: (taskId: number) => void;
  onTaskRemove: (taskId: number) => void;
  onTaskAdd: (task: Task) => void; // prop for adding tasks
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskStatusChange, onTaskRemove, onTaskAdd }) => {
  const [taskText, setTaskText] = useState<string>('');
  const [taskPriority, setTaskPriority] = useState<Priority>('medium');

  useEffect(() => {
    console.log('TaskList component updated');
  }, [tasks]);

  const handleTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (taskText.trim() === '') return;

    const newTask: Task = {
      id: Date.now(),
      text: taskText,
      priority: taskPriority,
      isComplete: false,
    };

    onTaskAdd(newTask);
    setTaskText('');
  };

  return (
    <div className="task-list">
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <select
          value={taskPriority}
          onChange={(e) => setTaskPriority(e.target.value as Priority)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>

      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onTaskStatusChange={onTaskStatusChange}
          onTaskRemove={onTaskRemove}
        />
      ))}
    </div>
  );
};

export default TaskList;
