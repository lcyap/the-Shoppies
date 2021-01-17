import './App.css';
import axios from 'axios'
import Search from './components/Search';
import Header from './components/Header';
import Nominations from './components/Nominations'
import React, { useState, useCallback } from 'react'

import _ from 'lodash'
import Suggestions from './components/Suggestions'
function App() {

  const [searchQuery, setSearchQuery] = useState('')
  const [resultData, setResultData] = useState([])
  const [nominees, setNominees] = useState([])


  const sendQuery = async query =>{
    let data = await axios.get(`http://www.omdbapi.com/?apikey=19b10e59&s=${query}&type=movie`)
    let purifiedData = data.data.Search
    setResultData(purifiedData)
  }

  const delayedQuery = useCallback(_.debounce(q => sendQuery(q), 500), [])


  const handleSearchQuery = (e) =>{
    setSearchQuery(e.target.value)
    delayedQuery(e.target.value)
  }

  const addNominee = (movie) =>{
        setNominees([...nominees, movie])
    }

  const removeNominee = (index)=>{
    let array = [...nominees]

    if (index !== -1){
      array.splice(index,1)
      setNominees(array);
    }
  }

  const isFull = ()=>{
    if (nominees.length > 4){
      return true;
    }
  }
  return (
    <div className="App">
      <Header />
      <Search searchQuery={searchQuery} resultData={resultData} handleSearchQuery={handleSearchQuery} />
      <div className={isFull() ? 'full-banner' : 'hide-banner'}>Success! You have nominated 5 movies!</div>
      <div className="body-container">
          {!resultData ? <div>  </div> :
          < Suggestions results={resultData} nominees={nominees} addNominee={addNominee}/>}
          
          {
            !nominees ? <div>No nominees yet! </div> :
            <div className="nom-cont">
            <Nominations nominees={nominees} removeNominee={removeNominee}/>
          </div>
          }
          
       
       </div>
    </div>
  );
}

export default App;
