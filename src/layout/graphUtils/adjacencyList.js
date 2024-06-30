// Función para construir la lista de adyacencia con index y name
export const createAdjacencyList = (graphData) => {
  const adjacencyList = {};

  // Iterar sobre cada enlace
  graphData.links.forEach((link) => {
    const { source, target } = link;

    // Añadir la conexión de source a target
    if (!adjacencyList[source.index]) {
      adjacencyList[source.index] = [];
    }
    adjacencyList[source.index].push({
      index: target.index,
      name: target.name,
    });

    // Añadir la conexión de target a source (si es no dirigido)
    // Si es un grafo dirigido, omitir esta parte
    // if (!adjacencyList[target.index]) {
    //   adjacencyList[target.index] = [];
    // }
    // adjacencyList[target.index].push({ index: source.index, name: source.name });
  });

  return adjacencyList;
};
