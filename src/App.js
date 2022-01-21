import './App.scss';
import {isDesktop} from "react-device-detect";
import Desktop from "./pages/Desktop";
import Mobile from "./pages/Mobile";

function App() {
  if (!isDesktop) {
    return <Mobile/>
  }
  return <Desktop/>
}

export default App;
