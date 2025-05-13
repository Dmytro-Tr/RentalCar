import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import CatalogPage from "./pages/Catalog/CatalogPage";
import HomePage from "./pages/Home/HomePage";
import DetailsPage from "./pages/Details/DetailsPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div>
      <Layout></Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
