import AppLetras from "./components/AppLetras";
import { LetrasProvider } from "./context/LetasProvider";

function App() {
  return (
    <LetrasProvider>
      <AppLetras />
    </LetrasProvider>
  );
}

export default App;
