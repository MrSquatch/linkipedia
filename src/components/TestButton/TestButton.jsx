// import React from 'react';
import { Affix, Button } from '@mantine/core';
import useData from '../../store/useData'; // Importa el hook useData
import { createAdjacencyList } from '../../layout/graphUtils/adjacencyList'; // Importa la función createAdjacencyList

const AdjacencyListButton = () => {
  const { graphData } = useData(); // Obtiene graphData del estado global
  const adjacencyList = createAdjacencyList(graphData); // Crea la lista de adyacencia

  const handleAdjacencyListClick = () => {
    console.log(adjacencyList); // Muestra la lista de adyacencia en la consola
    // Aquí podrías hacer más con la lista de adyacencia, como mostrarla en la interfaz o procesarla
  };

  return (
    <Affix top={20} left={200}> {/* Ajusta la posición del botón */}
      <Button color="blue" onClick={handleAdjacencyListClick}>
        AdjL
      </Button>
    </Affix>
  );
};

export default AdjacencyListButton;
