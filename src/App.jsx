// import Header from "./components/Header";
// import Aside from "./components/Aside";
// import Content from "./components/Content";

import Context from "./context/Context";
import MainRouter from "./router/mainRouter";

// import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <main id="app">
      <Context>
        <MainRouter />
      </Context>
    </main>
  );
}

export default App;
