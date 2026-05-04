
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
};

const useQueueStore = create<State>((set) => {
  return { 
    queue: [],
    isLoading : false,
    error: null,
    actions: {
      fetchQueue: async () => {
        set({ isLoading: true, error: null });
        try {
          const data  = await fakeQueueApi.getQueue();
          set({ queue: data });
        } catch {
          set({ error: "Failed to fetch" })
        } finally {
            set({ isLoading: false });
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

