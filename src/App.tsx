import { DatabaseProvider } from "./context/context";

import Router from "./routes/route";
function App() {
  return (
    <>
      <DatabaseProvider>
        <div className="font-inter">
          <Router />
        </div>
      </DatabaseProvider>
    </>
  );
}

export default App;
