import { Affix, Button } from '@mantine/core';
import useData from '../../store/useData';
import { createAdjacencyList } from '../../layout/graphUtils/adjacencyList';

const AdjacencyListButton = () => {
  const { graphData } = useData();
  const adjacencyList = createAdjacencyList(graphData);

  // Función DFS limitada con Map para control de visitados
  const dfsLimited = (adjList, root, currentNode, strRes, depth, visited) => {
    visited.set(currentNode, true);
    strRes += adjList[currentNode].name + ' ';

    if (depth === 2) {
      console.log(strRes);
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

  const handleAdjacencyListClick = () => {
    console.log(adjacencyList);

    const visited = new Map();
    const selectedNode = 0;
    dfsLimited(adjacencyList, selectedNode, selectedNode, '', 0, visited);
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
