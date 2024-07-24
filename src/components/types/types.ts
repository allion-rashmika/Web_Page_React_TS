export interface Book {
    id: string;
    title: string;
    author: string;
    image: string;
    time?: string;
  }
  
  export interface Author {
    id: number;
    name: string;
    image: string;
  }
  
  export interface Summary {
    id: number;
    title: string;
    image: string;
    number: string;
  }
  