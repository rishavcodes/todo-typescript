export interface Task {
    id: number;
    text: string;
    isComplete: boolean;
    priority: Priority;
  }
  
  export type Priority = 'low' | 'medium' | 'high';
  