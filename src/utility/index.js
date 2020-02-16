/**
 * Return two merged objects.
 * @param oldObject
 * @param updatedProperties
 */
export const updateObject = (oldObject, updatedProperties = {}) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

export const isAdjacent = (path, column, row) => {
  return Math.abs(path[path.length - 1].column - column) <= 1 && Math.abs(path[path.length - 1].row - row) <= 1;
};
