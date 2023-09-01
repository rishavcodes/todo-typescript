import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  onTaskStatusChange: (taskId: number) => void;
  onTaskRemove: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onTaskStatusChange, onTaskRemove }) => {
  const { id, text, isComplete, priority } = task;

  return (
    <div className={`task-item ${isComplete ? 'complete' : ''}`}>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => onTaskStatusChange(id)}
      />
      <span className={`task-text ${isComplete ? 'completed' : ''}`}>{text}</span>
      <span className={`priority ${priority}`}>{priority}</span>
      <button onClick={() => onTaskRemove(id)}>Remove</button>
    </div>
  );
};

export default TaskItem;
