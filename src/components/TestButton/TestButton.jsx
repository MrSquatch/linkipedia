import { Affix, Button } from '@mantine/core';
import useData from '../../store/useData';
import { createAdjacencyList } from '../../layout/graphUtils/adjacencyList';

const AdjacencyListButton = () => {
  const { graphData } = useData();
  const adjacencyList = createAdjacencyList(graphData);

  const handleAdjacencyListClick = () => {
    console.log(adjacencyList);

    // Aquí podrías hacer más con la lista de adyacencia, como mostrarla en la interfaz o procesarla
  };

  return (
    <Affix top={20} right={300}> {}
      <Button color="blue" onClick={handleAdjacencyListClick}>
        Adjacent List
      </Button>
    </Affix>
  );
};

export default AdjacencyListButton;
