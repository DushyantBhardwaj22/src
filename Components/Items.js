import React from "react";
import { Catgcontxt } from "./ImgContext";
import { BrowserRouter as Router, Route, Link, Routes, } from "react-router-dom";
import App from "../App";
const Items = () => {
  const { image, query } = React.useContext(Catgcontxt);
  const [search, setSearch] = query
  const [imgdata, setImgdata] = image
  function handleSearch(val) {
    setSearch(val)
  }
  return (<>
  <div>
    <div className="menu-tabs container">
      <Router>
        <Routes><Route path='/' component={<App />} /> </Routes>
        <div className="menu-tab d-flex justify-content-around">
          <Link to="/"> <button className='btn btn-primary' onClick={() => handleSearch("Nature")}>Home</button></Link>
          <Link to="/mountain"> <button className='btn btn-primary' onClick={() => handleSearch("mountain")} >Mountain</button></Link>
          <Link to="/birds"> <button className='btn btn-primary' onClick={() => handleSearch("birds")}>Birds</button></Link>
          <Link to="/food">  <button className='btn btn-primary' onClick={() => handleSearch("food")}>Food</button></Link>
          <Link to="/beach"> <button className='btn btn-primary' onClick={() => handleSearch("beach")}>Beaches</button></Link>
        </div></Router>
    </div>
    </div>
  </>
  )
}
export default Items