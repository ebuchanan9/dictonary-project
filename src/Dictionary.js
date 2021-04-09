import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults]= useState({});
    let [loaded, setLoaded]= useState(false);

    function handleResponse(response){
        setResults(response.data[0]);
    }
    function search (){
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
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
        </div>
         );
    }else{
        load();
        return "Loading"
    }
}