export const isArray = (arr: [] | null) => {
  return Array.isArray(arr);
};

interface ReduceObjParam {
  [key: string]: unknown;
}

export const createHashMap = (arr: any[], property: string) => {
  const hashMap = arr.reduce((acc, item) => {
    const key = item[property];
    acc[key] = item;
    return acc;
  }, {} as ReduceObjParam);

  return hashMap;
};
