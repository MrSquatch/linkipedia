import Graph from './layout/Graph';
import SearchBar from './components/SearchBar';
import Notif from './components/Notif';
import ResetButton from './components/ResetButton';
import ColorTheme from './components/ColorTheme/ColorTheme';
import TestButton from './components/DfsButton/DfsButton';

const App = () => {
  return (
    <>
      <SearchBar />
      <ResetButton />
      <Graph />
      <Notif />
      <ColorTheme />
      <TestButton />
    </>
  );
};

export default App;
