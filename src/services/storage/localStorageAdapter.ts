
// save
const save = <T> (key: string, data:T): void  => {
  try {
    if (data === undefined) return;
    const FULL_KEY = `libraryQueue:${key}`;
    localStorage.setItem(FULL_KEY, JSON.stringify(data));
  } catch(error) {
    console.error("Storage save error", error);
  }
}

// load

// remove

export const localStorageAdapter = {
  save
};