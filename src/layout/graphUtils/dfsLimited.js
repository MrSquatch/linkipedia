// Función DFS limitada con Map para control de visitados
export const dfsLimited = (
  adjList,
  root,
  currentNode,
  strRes,
  depth,
  visited
) => {
  visited.set(currentNode, true);

  strAdd = adjList[currentNode].name;
  if (depth === 1) strAdd.toUpperCase();

  strRes += strAdd + ' ';

  if (depth === 2) {
    console.log('\t-', strRes);
    return;
  }

  // Recorrer los hijos del nodo actual
  adjList[currentNode].children.forEach((child) => {
    if (depth === 0) {
      if (!visited.has(child.index)) {
        dfsLimited(adjList, root, child.index, strRes, depth + 1, visited);
      }
    }

    if (depth === 1) {
      if (child.index != root) {
        dfsLimited(adjList, root, child.index, strRes, depth + 1, visited);
      }
    }
  });
};
