import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Param from "./componenets/editPage/Param";
import Main from "./componenets/main/main";
import EditPage from "./componenets/editPage/editPage";
import './App.css';

async function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main />}/>
          {/* <Route path={"/edit/:id"} element={<Param />}/> */}
          <Route path={"/edit"} element={<EditPage />}/>
          <Route path={"/edit"} element={<EditPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
