// Función para construir la lista de adyacencia con index y name
export const createAdjacencyList = (graphData) => {
  const adjacencyList = {};

  // Iterar sobre cada enlace
  graphData.links.forEach((link) => {
    const { source, target } = link;

    // Añadir la conexión de source a target
    if (!adjacencyList[source.index]) {
      adjacencyList[source.index] = {
        name: source.name,
        children: [],
      };
    }
    adjacencyList[source.index].children.push({
      index: target.index,
      name: target.name,
    });

    // Añadir la conexión de target a source
    if (!adjacencyList[target.index]) {
      adjacencyList[target.index] = {
        name: target.name,
        children: [],
      };
    }
    adjacencyList[target.index].children.push({
      index: source.index,
      name: source.name,
    });
  });

  return adjacencyList;
};
