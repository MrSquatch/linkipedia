import { Affix, Button } from '@mantine/core';
import useData from '../../store/useData';
import { createAdjacencyList } from '../../layout/graphUtils/adjacencyList';

const AdjacencyListButton = () => {
  const { graphData } = useData();
  const adjacencyList = createAdjacencyList(graphData);

  // Función DFS limitada con Map para control de visitados
  const dfsLimited = (adjList, currentNode, strRes, depth, visited) => {
    visited.set(currentNode, true); // Marcar el nodo como visitado

    strRes += adjList[currentNode].name; // Agregar el nombre del nodo al resultado

    if (depth === 2) {
      console.log(strRes); // Imprimir resultado cuando se alcanza la profundidad deseada
      return;
    }

    // Recorrer los hijos del nodo actual
    adjList[currentNode].children.forEach((child) => {
      if (!visited.has(child.index)) {
        // Si el hijo no ha sido visitado
        dfsLimited(adjList, child.index, strRes, depth + 1, visited); // Llamada recursiva para el siguiente nivel
      }
    });
  };

  const handleAdjacencyListClick = () => {
    console.log(adjacencyList);

    // Aquí podrías hacer más con la lista de adyacencia, como mostrarla en la interfaz o procesarla

    const visited = new Map(); // Map para rastrear los nodos visitados

    dfsLimited(adjacencyList, 0, '', 0, visited); // Llamar a DFS desde el nodo raíz (índice 0), profundidad inicial 0
  };

  return (
    <Affix top={20} right={200}>
      {' '}
      {}
      <Button color="blue" onClick={handleAdjacencyListClick}>
        AdjList + DFS
      </Button>
    </Affix>
  );
};

export default AdjacencyListButton;
