import type { QueuePerson } from "../../features/queue/types";
import { QUEUE_KEY } from "../../features/queue/constants";
import { localStorageAdapter } from "../storage/localStorageAdapter";

// addPerson
const addPerson = (
    libraryCardLastFour: string,
    name: string
  ): QueuePerson[] => {
  
    // load queue
  const queue = localStorageAdapter.load<QueuePerson[]>(QUEUE_KEY, []);
  
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
const removePerson = (id: string) : QueuePerson[]  => {

  // Load queue
    const queue = localStorageAdapter.load<QueuePerson[]>(QUEUE_KEY, []);

  // Remove person by id 
  const newQueue = queue.filter((person) => person.id !== id);

  // Save updated queue
  localStorageAdapter.save(QUEUE_KEY, newQueue);

  // Return updated queue
  return newQueue; 

}

// assignComputer
const assignComputer = (id: string, computerNumber: number) : QueuePerson[] => {
  const queue = localStorageAdapter.load<QueuePerson[]>(QUEUE_KEY, []);

  if(computerNumber <= 0) {
    console.warn('Invalid computer number');
    return queue;
  }

  // Find the person
  const personIndex = queue.findIndex((p) => ( p.id === id ));
  if(personIndex === -1) {
    console.warn(`Person with id ${id} not found`);
    return queue;
  }

  // Update the person 
  queue[personIndex].computerNumber = computerNumber;

  // Save the updated queue
  localStorageAdapter.save(QUEUE_KEY, queue);

  // Return the updated queue
  return queue;
}

const getQueue = () => {
  const queue = localStorageAdapter.load<QueuePerson[]>(QUEUE_KEY, []);

  return queue;
}

export const queueService = {
  addPerson,
  removePerson,
  assignComputer,
  getQueue,
};