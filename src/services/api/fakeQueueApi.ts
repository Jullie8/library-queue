import type { QueuePerson } from "../../features/queue/types";
import { queueService } from "../queue/queueService"


 const getQueue = () : Promise<QueuePerson[]> => {
  // return a promise
  return new Promise((resolve) => {
    // wait 300ms
    setTimeout(() => {
      // load queue Service
      const queue = queueService.getQueue();
      resolve(queue);
    }, 300);
  });
 }

 const addPerson = (libraryCardLastFour: string, name: string) : Promise<QueuePerson []> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const queue = queueService.addPerson(
        libraryCardLastFour, 
        name
      );
      resolve(queue);
    }, 300);
  });
 }

export const fakeQueueApi = {
  getQueue,
  addPerson,
}