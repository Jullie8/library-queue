
// save => write data
const save = <T> (key: string, data:T): void  => {
  try {
    if (data === undefined) return;
    const FULL_KEY = `libraryQueue:${key}`;
    localStorage.setItem(FULL_KEY, JSON.stringify(data));
  } catch(error) {
    console.error("Storage save error", error);
  }
}

// load => retrieves stored data reads data
const load = <T>(key: string, data: T): T => {
  try {
    const FULL_KEY = `libraryQueue:${key}`;
    const raw = localStorage.getItem(FULL_KEY); //either string or null
    
    if (!raw) return data; // key missing

    const parsed = JSON.parse(raw);

    if (parsed === null) return data; // key exists but value is null
    

    return parsed;
  } catch(error) {
    console.error("Storage load error", key, error);
    return data;
  }
}

// remove => Delete one stored item using its key.
const remove = (key: string): void =>  {
  try {
    const FULL_KEY = `libraryQueue:${key}`;

    localStorage.removeItem(FULL_KEY);
  } catch (error) {
      console.error("Storage remove error", key, error);
  }
}

export const localStorageAdapter = {
  save, 
  load,
  remove
};