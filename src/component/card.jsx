
import {Bookmark } from 'lucide-preact';

function Card(props){
    console.log(props);
    return(
        
            <div className="card">
     <div className="top">
     <img
  src="https://imgs.search.brave.com/8KgsRJzLVNqFn5YGp7ZkB16L1Znegr72N45yDZpUzKg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzU0LzA3/LzM2MF9GXzI5NDU0/MDcyMl9WSXdTV3ly/VTZxNzgxU2tIV1Ns/elVEWGpmb3VSbGo0/Ny5qcGc"
  alt="Amazon logo"
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
          <p> Mumbaii,India</p>
        </div>
      
      <div >
        <button> Apply now</button>
      </div>
      </div> 
      </div>
      
    
           
         


    
    );

    
}
export default Card;
