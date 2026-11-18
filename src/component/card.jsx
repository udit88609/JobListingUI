
import {Bookmark } from 'lucide-preact';

function Card(props){
    console.log(props);
    return(
        
            <div className="card">
     <div className="top">
     <img
  src={props.brandlogo}
  alt=""
/>
      <button>save <Bookmark size={12} /></button>
      </div>

      
     <div className="center">
      <h3> {props.company}  <span> {props.datePosted}</span></h3>
      <h2> {props.post}</h2>
      <div className='tag'> 
        <h3> {props.tag1}</h3>
        <h3> {props.tag2}</h3>
      </div>
     </div>
     <div className="buttom">
      <div> 
         
          <h1> {props.pay}</h1>
          <p> {props.location}
            
          </p>
        </div>
      
      <div >
        <button> Apply now</button>
      </div>
      </div> 
      </div>
      
    
           
         


    
    );

    
}
export default Card;
