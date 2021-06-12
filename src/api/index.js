export const fetchFolderContent = path => {
  const endpoint = `http://localhost:3002?path=${path}`;
  return fetch(endpoint).then(response => response.json());
};
