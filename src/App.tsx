import Navbar from "components/Navbar/Navbar";
import SerchPage from "pages/SerchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App({ p }: { p?: number }) {
  // console.log("s");

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SerchPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
