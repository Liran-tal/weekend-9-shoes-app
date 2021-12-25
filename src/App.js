import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./componenets/main/main";
import EditPage from "./componenets/editPage/editPage";
import './App.css';


class App extends React.Component {
  state = {
    itemToEditId: undefined,
    itemChangedId: undefined,
  }
  
  handleClickItemEdit = ({target}) => {
    this.setState({itemToEditId: target.id});
  }
  
  getChangedItemId = ({target}) => {
    this.setState({itemChangedId: target.id});
  }


  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route 
              path={"/"} 
              element={<Main 
                onItemEdit={this.handleClickItemEdit} 
                itemChangedId={this.state.itemChangedId}
              />}
            />
            <Route 
              path={"/edit"} 
              element={<EditPage 
                getChangedItemId={this.getChangedItemId}
                id={this.state.itemToEditId} 
              />}
            />
            <Route 
              path={"/item"} 
              element={<EditPage />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
