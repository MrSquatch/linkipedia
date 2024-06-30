import { Affix, Button } from '@mantine/core';
import useData from '../../store/useData';
import { createAdjacencyList } from '../../layout/graphUtils/adjacencyList';
import { dfsLimited } from '../../layout/graphUtils/dfsLimited';

const SemanticButton = () => {
  const { graphData } = useData();
  const adjacencyList = createAdjacencyList(graphData);

  const handleSemanticClick = () => {
    console.log(adjacencyList);

    if (Object.values(adjacencyList).length != 0) {
      const visited = new Map();
      const selectedNode = 0;

      console.log('Semantic Relations of Node ' + selectedNode + ':');
      dfsLimited(adjacencyList, selectedNode, selectedNode, '', 0, visited);
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
