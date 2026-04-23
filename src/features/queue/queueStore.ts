
import { create } from "zustand";
import type { QueuePerson } from "./types";

type State = {
 queue: QueuePerson[];
 isLoading : boolean;
 error: string | null;
};

export const useQueueStore = create<State>((set) => {
  // return object all the diff values you want in the store
  return { 
    queue: [],
    isLoading : false,
    error: null,
  }
});


