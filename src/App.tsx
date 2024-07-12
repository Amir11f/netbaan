import "./App.css";
import Assets from "./components/assets/Assets";
import Box from "./components/boxes/Box";
import EarhtPlanet from "/public/svgs/EarthPlanet.svg";
function App() {
  return (
    <div className="appStyle">
      <Box image={EarhtPlanet} />
      <Assets />
    </div>
  );
}

export default App;
