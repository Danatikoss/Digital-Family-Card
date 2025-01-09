
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/digital_family_card/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  