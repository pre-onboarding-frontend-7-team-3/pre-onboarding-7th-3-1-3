import SerchPage from "pages/SerchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App({ p }: { p?: number }) {
  // console.log("s");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SerchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
