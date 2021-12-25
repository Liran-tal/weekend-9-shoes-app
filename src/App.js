import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Param from "./componenets/editPage/Param";
import Main from "./componenets/main/main";
// import EditPage from "./componenets/editPage/editPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />}/>
          {/* <Route path={"/:id"} element={<Param />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
