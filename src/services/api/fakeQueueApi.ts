import type { QueuePerson } from "../../features/queue/types";
import { queueService } from "../queue/queueService"
import { API_DELAY } from "./config";

const getQueue = () : Promise<QueuePerson[]> => {
  // return a promise
  return new Promise((resolve) => {
    // wait 300ms
    setTimeout(() => {
      const queue = queueService.getQueue();
      resolve(queue);
    }, API_DELAY);
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
    }, API_DELAY);
  });
}

const removePerson = (id: string) : Promise<QueuePerson[]> => {
  return new Promise((resolve) => {
    // wait 300ms THEN: 
    setTimeout(() => {
      const queue = queueService.removePerson(id);
      resolve(queue);
    }, API_DELAY);
  });
}

const assignComputer = (id: string, computerNumber: number) : Promise<QueuePerson[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const queue = queueService.assignComputer(id, computerNumber);
      resolve(queue);
    }, API_DELAY);
  });
}

export const fakeQueueApi = {
  getQueue,
  addPerson,
  removePerson,
  assignComputer,
};