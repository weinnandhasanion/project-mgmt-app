export const getLocalStorageToken = () => {
  const token = localStorage.getItem("token");

  return token ? `Bearer ${token}` : undefined;
};

export const checkIfTokenExists = () => Boolean(getLocalStorageToken());
