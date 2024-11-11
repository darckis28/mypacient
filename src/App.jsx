import Context from "./context/Context";
import MainRouter from "./router/MainRouter";
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
