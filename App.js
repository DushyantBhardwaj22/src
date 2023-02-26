import './App.css';
import React, { useEffect, useState, useContext } from 'react'
import { Search, SearchImages } from './Components/Search';
import Images from './Components/Images'
import Items from './Components/Items'
import { Catgcontxt } from './Components/ImgContext'
function App() {
  const [imgdata, setImgdata] = useState([])
  const [search, setSearch] = useState("mountain")

  return (
    <Catgcontxt.Provider value={{ image: [imgdata, setImgdata], query: [search, setSearch] }}>
      <div className="App">
        <div className="page-header"><h1>Gallery</h1></div>
        <Search /> <Items /> <Images />
      </div>
    </Catgcontxt.Provider>
  );
}

export default App;
