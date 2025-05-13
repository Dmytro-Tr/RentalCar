import "./App.css";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <nav>
        <Link></Link>
      </nav>
      <Routes>
        <Route path="/" element="" />
        <Route path="/home" element="" />
        <Route path="/catalog" element="" />
        <Route path="/details" element="" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
