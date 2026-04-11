export interface QueuePerson {
  id: string;         // library card last four digits
  name: string;       // user's name
  createdAt: number;  // timestamp when they joined the queue
}