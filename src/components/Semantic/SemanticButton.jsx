import { Affix, Button } from '@mantine/core';
import useData from '../../store/useData';
import { createAdjacencyList } from '../../layout/graphUtils/adjacencyList';
import { dfsLimited } from '../../layout/graphUtils/dfsLimited';

const SemanticButton = () => {
  const { graphData, expandedItems, selectedNode } = useData();
  const adjacencyList = createAdjacencyList(graphData);

  const handleSemanticClick = () => {
    console.log(adjacencyList);
    console.log(expandedItems);
    console.log(selectedNode);

    if (Object.values(adjacencyList).length != 0) {
      if (!expandedItems.includes(selectedNode)) {
        console.log('The selected node is not a root!');
      } else {
        const visited = new Map();
        const startNode = selectedNode.index;

        console.log('Semantic Relations of Node ' + startNode + ':');
        dfsLimited(adjacencyList, startNode, startNode, '', 0, visited);
      }
    } else {
      console.log('Adjacency List is empty!');
    }
  };

  return (
    <Affix top={20} right={100}>
      {' '}
      {}
      <Button color="blue" onClick={handleSemanticClick}>
        Semantic Relations
      </Button>
    </Affix>
  );
};

export default SemanticButton;
