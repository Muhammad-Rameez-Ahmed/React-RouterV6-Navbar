import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Home page</div>}/>
      <Route path="/about" element={<div> About</div>}/>
      <Route path="/contact" element={<div>contact us </div>}/>
      <Route path="*" element={<div>Error</div>} />
    </Routes>


    </BrowserRouter>
   
  );
}

export default App;
