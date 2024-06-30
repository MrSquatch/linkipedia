import ForceGraph2D from 'react-force-graph-2d';
import useData from '../../store/useData';
import { useViewportSize } from '@mantine/hooks';

const Graph = () => {
  const {
    graphData,
    expandItem,
    fetchState,
    expandedItems,
    setSelectedNode,
  } = useData();
  const { width } = useViewportSize();

  // Imprime graphData en la consola cada vez que el componente se renderiza
  console.log(graphData);

  const handleNodeClick = (node) => {
    if (fetchState === 'loading') {
      return;
    }
    if (node.isProperty) {
      return;
    }
    setSelectedNode(node); // Establecer el nodo seleccionado
    expandItem(node);
  };

  const assignNodeColor = (node) => {
    const luminence = expandedItems.includes(node) ? 50 : 80;
    if (node.isProperty) {
      return '#bbbbbb';
    }
    return `hsl(${node.__hue}, 70%, ${luminence}%)`;
  };

  const assignNodeVal = ({ isProperty }) => (isProperty ? 0.25 : 1.5);

  return (
    <>
      <ForceGraph2D
        graphData={graphData}
        width={width}
        onNodeClick={handleNodeClick}
        nodeColor={assignNodeColor}
        nodeVal={assignNodeVal}
        linkColor={() => '#bbbbbb'}
      />
    </>
  );
};

export default Graph;
