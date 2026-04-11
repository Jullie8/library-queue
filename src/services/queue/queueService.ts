import type { QueuePerson } from "../../features/queue/types";
import { localStorageAdapter } from "../storage/localStorageAdapter";

// addPerson
const addPerson = (
    libraryCardLastFour: string,
    name: string
  ): QueuePerson[] => {
  
    // load queue
  const queue = localStorageAdapter.load<QueuePerson[]>('queue', []);
  
  // Validate Input
  if (!libraryCardLastFour || libraryCardLastFour.length !== 4) {
    console.warn('Invalid library card input');
    return queue;
  }

  if(!name) {
    console.warn('Name is required');
    return queue;
  }

  // create new QueuePerson
  const newPerson: QueuePerson = {
    id: libraryCardLastFour,
    name: name,
    createdAt: Date.now(),
  };

  // append to queue
  queue.push(newPerson);

  // Save updated Queue
  localStorageAdapter.save('queue', queue);

  // Return updated queue
  return queue;
};


// removePerson
const removePerson = () => {
  // Load queue
  // Remove by id
  // Save updated queue
  // Return updated queue
}

// assignComputer
const assignComputer = () => {
  // Remove person from queue
  // Create session object
  // Save session
  // Return updated state
}

export const queueService = {
  addPerson,
  removePerson,
  assignComputer
}