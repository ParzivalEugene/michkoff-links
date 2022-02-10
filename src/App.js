import './App.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
