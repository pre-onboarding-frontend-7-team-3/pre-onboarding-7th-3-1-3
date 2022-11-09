import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App({ p }: { p?: number }) {
  // console.log('s');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>App</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
