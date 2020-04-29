import React from 'react';
import './Ninjas.css';
import { render } from '@testing-library/react';

const  Ninjas =({ninjas, deleteNinja})=>{
    const ninjaList = ninjas.map(ninja=>{
        return ninja.age>30?(
            <div className = "ninja" key ={ninja.id}>    
            <div> Name :{ninja.name}</div>
            <div> Age : {ninja.age}</div>
            <div> Belt : {ninja.belt}</div>
            <button onClick={ () => {deleteNinja(ninja.id)}}>Delete</button>
            </div>
        ): null
    })
    return(
        
        <div className = "ninja-list">
            { ninjaList }
        </div>    

    );
}
export default Ninjas