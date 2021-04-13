import React from 'react';
import UserInput from '../UserInput/UserInput';

const userOutput = (props) => {
    const styleInline ={
        width:'50%',
        backgroundColor: 'black',
        padding:'10px',
        color:'white',
        margin: 'auto'
        
    }
   
    return(
        <div>
            <UserInput  change={props.change}/>
            <p style = {styleInline}>
            questo è un paragrafo 1 di {props.nome}
            </p>
            <p>
            questo è un paragrafo 2
            </p>
        </div>
       
    )
}
export default userOutput;