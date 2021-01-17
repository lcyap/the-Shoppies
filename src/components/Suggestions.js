import React from 'react'
import './Suggestions.css'

const Suggestions = (props) =>{

    const options = props.results.map(r => (
       <div>
               <p className="title-year">{r.Title} ({r.Year})</p>
                <img className="poster" src={r.Poster} alt={r.Title}></img>
                <div className="nom-btn">
                    <button disabled={(props.nominees.includes(r)|| props.nominees.length > 4)} onClick={()=> props.addNominee(r)}> Nominate </button>
                </div>
          
       </div> 
    ))
    
    return (
        <div className="sugg-container">
            <div className="sugg-desc">
                <h4>Nominate up to 5 movies!</h4> 
            </div>
           
           <div className="movie-container">
                {options}
               <div className="moviedetail">
                  
               </div>
                    
               
                
           </div>
           
            
        </div>
       
    
    )

    
}

export default Suggestions