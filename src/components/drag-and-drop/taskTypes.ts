// taskTypes.ts

export interface Task {
    id: string;
    title: string;
    description: string;
    status: string;
    isOnBox: boolean;
    color : string;
  }
  
  export interface Column {
    id: string;
    name: string;
  }
  