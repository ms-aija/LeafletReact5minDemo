import { Map } from './components/Map';
import LeafletLogo from './assets/leafletlogo.png';
import ReactIcon from './assets/reacticon.png';

function App() {
  return (
    <div className="App">
      <nav>
        <img src={LeafletLogo} alt={'leaflet logo'} className="logo-mid"/>
        <img src={ReactIcon} alt={'react logo'} className="logo-small"/>
      </nav>
      <Map />
    </div>
  );
}

export default App;
