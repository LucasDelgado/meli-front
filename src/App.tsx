import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import { ErrorHandler } from "./components/errorHandler/ErrorHandler";
import { Layout } from "./components/layout/Layout";
import { ItemId } from "./pages/items/ItemId";
import { Items } from "./pages/items/Items";
import { useStore } from "./store/storeProvider";

function App() {
  const { loading } = useStore();
  return (
    <div className={`App ${loading ? "active" : ""}`}>
      <ErrorBoundary>
        <Layout>
          <Routes>
            <Route path="/" element={<div></div>} />
            <Route path="items" element={<Items />} />
            <Route path="items/:id" element={<ItemId />} />
            <Route path="*" element={<ErrorHandler status={404} />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </div>
  );
}

export default App;
