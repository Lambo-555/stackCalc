import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import styles from "./pages/index.module.scss";
import Main from "./pages/Main/Main";

function App() {
  return (
    <Router className={styles}>
      <Switch>
        <Route path={"/"} component={Main}/>
      </Switch>
    </Router>
  );
}

export default App;
