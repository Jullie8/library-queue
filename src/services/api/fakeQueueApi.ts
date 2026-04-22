import type { QueuePerson } from "../../features/queue/types";
import { queueService } from "../queue/queueService"

 const getQueue = () : Promise<QueuePerson[]> => {
  // return a promise
  return new Promise((resolve) => {
    // wait 300ms
    setTimeout(() => {
      const queue = queueService.getQueue();
      resolve(queue);
    }, 300);
  });
 }

 const addPerson = (libraryCardLastFour: string, name: string) : Promise<QueuePerson[]> => {
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

const removePerson = (id: string) : Promise<QueuePerson[]> => {
  return new Promise((resolve) => {
    // wait 300ms THEN: 
    setTimeout(() => {
      const queue = queueService.removePerson(id);

      resolve(queue);
    }, 300);
  });

}

const assignComputer = (id: string, computerNumber: number) : Promise<QueuePerson[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const queue = queueService.assignComputer(id, computerNumber);

      resolve(queue);
    }, 300);
  });
}

export const fakeQueueApi = {
  getQueue,
  addPerson,
  removePerson,
  assignComputer,
};