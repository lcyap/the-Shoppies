import React, {useState} from 'react'
import './Nominations.css'
function Nominations(props) {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const noms = props.nominees.map((nom,index) => (
       
            <div className="nom-movies">
                <p className="nom-title-year">{nom.Title} ({nom.Year})</p>
                 <button onClick={()=> props.removeNominee(index)}>Remove</button>
           
            </div>
        
        
    ))

    const limit = () =>{
        if (props.nominees.length > 4){
            return true
        }else return false
    }
    return (
        <div>
            <div className='nom-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-trophy'} ></i>
            </div>

            <div className={click ? 'nom-outer active' : 'nom-outer'}>
            <div className="nom-head">
                <h3>YOUR NOMINATIONS</h3>
            </div>
            {limit() ? 
                <div className="limit-banner">Cant add more</div> : 
                <div></div>}
            
            <div className="nom-container">
                {noms}           
            </div>
        </div>
        </div>
        
    )
}

export default Nominations
