import database from "./structure_file.json";

export const getFolderContent = path => {
  const pathArray = path.split("/").splice(1);

  let tempFolderContent = null;
  for (let i = 0; i < pathArray.length; i++) {
    const currentPathName = pathArray[i];

    if (i === 0) {
      tempFolderContent = database.children;
    } else {
      const nextFolder = tempFolderContent.find(
        item => {
          return item.name === currentPathName
        },
      );
      tempFolderContent = nextFolder.children;
    }
  }

  const temp = tempFolderContent.map(child => {
    const copy = Object.assign({}, child);
    delete copy.children;
    return copy;
  });

  return temp;
}


export const getFolderContent2 = path => {
  const pathArray = path.split("/") ;//.splice(1);
  let tempFolderContent = null;
  for (let i = 0; i < pathArray.length; i++) {
    const currentPathName = pathArray[i];
    const nextFolder = tempFolderContent.find(
      item => {
        return item.name === currentPathName
      },
    );
    tempFolderContent = nextFolder.children;
  }

  const temp = tempFolderContent.map(child => {
    const copy = Object.assign({}, child);
    delete copy.children;
    return copy;
  });
  return temp;
}
