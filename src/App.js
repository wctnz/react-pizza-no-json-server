import { Header } from "./components";
import { Home, Bin } from "./pages";
import { Route } from "react-router-dom"

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/bin" component={Bin} exact />
      </div>
    </div>
  );
}

export default App;
