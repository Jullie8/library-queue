
import { create } from "zustand";
import type { QueuePerson } from "./types";
import { fakeQueueApi } from "../../services/api/fakeQueueApi";

type State = {
  queue: QueuePerson[];
  isLoading : boolean;
  error: string | null;
  actions: QueueActions; 
};

type QueueActions = {
    fetchQueue: () => Promise<void>;
    addPerson: (libraryCardLastFour: string, name: string) => Promise<void>;
    removePerson: (id: string) => Promise<void>;
    assignComputer: (id: string, computerNumber: number) => Promise<void>;
};

const useQueueStore = create<State>((set) => {
  return { 
    queue: [],
    isLoading : false,
    error: null,
    actions: {
      fetchQueue: async () => {
        set({isLoading: true, error: null});
        try {
          const data  = await fakeQueueApi.getQueue();
          set({queue: data});
        } catch {
          set({error: "Failed to fetch"})
        } finally {
            set({isLoading: false});
        }
      },
      addPerson: async (libraryCardLastFour: string, name: string) => {
        set ({isLoading: true, error: null})
        try {
        const data = await fakeQueueApi.addPerson(libraryCardLastFour, name);

        set({queue: data});
        } catch {
            set({error: "Failed to add person"});
        } finally {
            set({isLoading: false}); 
        }
      },
      removePerson: async (id: string) => {
        set({isLoading: true, error: null});
        try {
          const data = await fakeQueueApi.removePerson(id);
          set({queue: data});
        } catch {
          set({error: "Failed to remove person"});
        } finally {
          set({isLoading: false});
        }
      },
      assignComputer: async (id: string, computerNumber: number) => {
        set({isLoading: true, error: null});
        try {
          const data = await fakeQueueApi.assignComputer(id, computerNumber);
          set({queue: data});
        } catch {
          set ({error: "Failed to assign a computer"});
        } finally {
          set ({isLoading: false})
        }
      }
    }
  }
});

// Selectors for data
export const useQueue = () => useQueueStore((state) => state.queue);
export const useQueueLoading = () => useQueueStore((state) => state.isLoading);

// one selector for all our actions
export const useQueueActions = () => useQueueStore((state) => state.actions);
export const useQueueError = () => useQueueStore((state) => state.error)

