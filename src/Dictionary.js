import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults]= useState({});
    let [loaded, setLoaded]= useState(false);
    let [photos, setPhotos] = useState (null);

    function handleResponse(response){
        setResults(response.data[0]);
    }
    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }
    function search (){
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = `563492ad6f9170000100000121f28b3b5d11474c8c4d7fe995b445d8`;
        let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=15&api_key=${pexelsApiKey}`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
        }

  
    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    function load(){
        setLoaded(true);
        search();
    }
    if  (loaded){
    return (
        <div className="Dictionary">
            <section>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} placeholder="Search for a word"/>
                </form>
                <div className="hint">
                    Suggested words: sunset, yoga, purple, December...
                </div>
            </section>
            <Results results={results}/>
            <Photos photos={photos} />
        </div>
         );
    }else{
        load();
        return "Loading"
    }
}