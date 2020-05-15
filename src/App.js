import React,{useEffect , useState} from 'react';
import axios from 'axios';
import Receipe from './Receipe';
import LoadingSpinner from './LoadingSpinner';
import './App.css';

function App() {

const [receipe , setReceipe] =useState([]);
const [search , setSearch] =useState('');
const [query , setQuery] =useState('chicken');
const [isLoaded, setIsLoaded] = useState(false);


 var appid ='40e26fcd';
 var appkey ='fa35eea17c502f4a85a209e1d66a4035';
 var req = `https://api.edamam.com/search?q=${query}&app_id=${appid}&app_key=${appkey}`;






useEffect(( )=>{
 
  console.log('useeffecr run ');
  setIsLoaded(true);
     axios.get(req)
     .then((res) => {
       const data =res.data.hits;
       setReceipe(data);
       setIsLoaded(false);
       console.log( receipe);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
},[query]);


const changed = (e)=>{
     setSearch(e.target.value);
     
}

const clicked = (e)=>{
  e.preventDefault();
       setQuery(search);
       setSearch('');
}

  return (
    
   
    <div className="App">   
    <h1 >React Receipe App </h1>
       <form className='search-form' onSubmit={clicked}>
        <h2>search Receip   :  </h2>
        <input className='search-bar'placeholder="serch keywords like: milk , egg, beef etc" type="text"  value = {search} onChange= {changed}/>            
        <input  className='btn' type='submit'/>
        </form>   

      {isLoaded ? <LoadingSpinner /> : 
                   <div className='receipe'>
                   {receipe.map(recepe=>(
                   <Receipe key ={recepe.recipe.label}
                   title ={recepe.recipe.label} 
                   cal =  {recepe.recipe.calories} 
                   image ={recepe.recipe.image} 
                   ingr ={recepe.recipe.ingredientLines} 
                   />         
                   ))}
                  
                 </div> }
      

    </div>
    
    
  );
}

export default App;
