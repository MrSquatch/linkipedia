import Graph from './layout/Graph';
import SearchBar from './components/SearchBar';
import Notif from './components/Notif';
import ResetButton from './components/ResetButton';
import ColorTheme from './components/ColorTheme/ColorTheme';
import SemanticButton from './components/Semantic/SemanticButton';

const App = () => {
  return (
    <>
      <SearchBar />
      <ResetButton />
      <Graph />
      <Notif />
      <ColorTheme />
      <SemanticButton />
    </>
  );
};

export default App;
