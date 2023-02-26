import React from "react";
import { useEffect, useState, useContext } from 'react'
import { Catgcontxt } from './ImgContext'
import axios from "axios";
const SearchImages = async (searchTerm) => {

    const response = await axios.get(`http://pixabay.com/api/?key=33928911-3e39c91ccac94d58061a8e502&q=${searchTerm}&image_type=photo&pretty=true`)
        .then(response =>
            response
        )
        .catch(error => {

            console.error('There was an error!', error);
        });

    return response
}
const Search = () => {
    const { image, query } = React.useContext(Catgcontxt);
    const [search, setSearch] = query
    const [imgdata, setImgdata] = image
    useEffect(() => {
        fetchData()
    }, [search])

    async function fetchData() {
        const res = await SearchImages(search);
        setImgdata(res.data.hits)
    }
    return (
        <>
            <div className="input-group">
                <div className="form-outline">
                    <input id="search-Term" type="search" className="form-control" />
                </div>
                <img className="srch" src="./images/search.png" onClick={() => { setSearch(document.getElementById("search-Term").value) }} />

            </div>
        </>
    )
}
export { Search, SearchImages }