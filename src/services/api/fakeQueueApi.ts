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
  })
 }
