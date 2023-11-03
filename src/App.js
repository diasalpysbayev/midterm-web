import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {RouterProvider} from "react-router";
import {ErrorBoundary} from "react-error-boundary";
import {router} from "./router/Router";

function App() {


  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={<>error</>}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
