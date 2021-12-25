import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Param from "./componenets/editPage/Param";
import Main from "./componenets/main/main";
import EditPage from "./componenets/editPage/editPage";
import './App.css';


class App extends React.Component {
  state = {itemToEditId: -1}
  
  handleItemEdit = ({target}) => {
    this.setState({itemToEditId: target.id});
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route 
              path={"/"} 
              element={<Main onItemEdit={this.handleItemEdit} />}
            />
            {/* <Route path={"/edit/:id"} element={<Param />}/> */}
            <Route 
              path={"/edit"} 
              element={<EditPage id={this.state.itemToEditId} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
