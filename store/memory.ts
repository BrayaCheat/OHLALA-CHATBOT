interface MemoryItem {
  userId: string;
  prompt: string;
  role: string;
}

export const useMemoryStore = defineStore(
  "MemoryStore",
  () => {
    const memoryList = ref<MemoryItem[]>([]);

    const setMemory = (data: MemoryItem) => {
      if (!data) return;
      memoryList.value.push(data);
    };

    const getMemory = () => {
      return memoryList.value;
    };

    const clearMemory = () => {
      memoryList.value = [];
    };

    return {
      //state
      memoryList,

      //functions
      setMemory,
      getMemory,
      clearMemory,
    };
  },
  { persist: true }
);
