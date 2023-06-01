export const getLocalStorageToken = () => {
  const token = localStorage.getItem("token");

  return token ? `Bearer ${token}` : undefined;
};

export const checkIfTokenExists = () => Boolean(getLocalStorageToken());

export const setLocalStorage = <D>(obj: { [key: string]: D }) => {
  for (const key of Object.keys(obj)) {
    const item =
      typeof obj[key] !== "string" ? JSON.stringify(obj[key]) : obj[key];
    localStorage.setItem(key, item as string);
  }
};
