import React from "react";
import { Catgcontxt } from './ImgContext'
const Images=()=>{
    const { image } = React.useContext(Catgcontxt); 
    const [imgdata, setImgdata]=image
  
    return(<>
    <div className="menu-items container-fluid mt-5">
        <div className="row">
            <div className="col-11 mx-auto">
                <div className="row">
                    {
                        imgdata.map((data,idx)=>{
                          
                          return ( <div key={idx} className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                          <div className="row Item-inside img-wrapper">
                                <img src={data.webformatURL} alt={data.tags} className="img-fluid hover-zoom w-100 shadow-1-strong rounded mb-4" />
                          </div>

                          
                    </div>)
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </>)
}
export default Images