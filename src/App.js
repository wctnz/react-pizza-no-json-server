import { Header } from "./components";
import { Home, Bin } from "./pages";
import { Route } from "react-router-dom"
import { useEffect, useState } from "react"

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then(response => response.json())
      .then(data => setPizzas(data.pizzas))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/bin" component={Bin} exact />
      </div>
    </div>
  );
}

export default App;
