import { DatabaseProvider } from "./context/context";
import Login from "./pages/login";
function App() {
  return (
    <>
      <DatabaseProvider>
        <div className="font-inter">
          <Login />
        </div>
      </DatabaseProvider>
    </>
  );
}

export default App;
