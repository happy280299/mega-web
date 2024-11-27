import { Provider } from "react-redux";
import "./App.css";
import AtomOrbitCanvas from "./assets/Component/Orbit";
import StarryBackground from "./assets/Component/Star";
import { store } from "./redux/store";
import { Toaster } from "react-hot-toast";
import { ContextProvider } from "./Context";
import { Navigate, Route, Routes } from "react-router-dom";
import LayoutLanding from "./Layout";
import Landing from "./Pages/Landing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <Toaster position="top-right" reverseOrder={false} /> */}
        {/* <StarryBackground /> */}
        <ContextProvider>
          <Routes>
            <Route element={<LayoutLanding />}>
              <Route path="/" element={<Landing />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </ContextProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
