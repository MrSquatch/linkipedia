import Graph from './layout/Graph'
import SearchBar from './components/SearchBar'
import Notif from './components/Notif'
import ResetButton from './components/ResetButton'
import ColorTheme from './components/ColorTheme/ColorTheme'
import TestButton from './components/TestButton/TestButton'

const App = () => {
  return (
    <>
      <SearchBar />
      <TestButton />
      <ResetButton />
      <Graph />
      <Notif />
      <ColorTheme/>
    </>
  )
}

export default App
