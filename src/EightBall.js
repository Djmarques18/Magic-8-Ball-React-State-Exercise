import React, {useState} from "react";
import Answers from "./Answers";
import './EightBall.css'

const EightBall = ()=> {
    
    const [answer, setAnswer] = useState()

    const getAnswer = ()=>{
        const randAnswer = Math.floor(Math.random() * Answers.length)
        setAnswer(Answers[randAnswer])
       
    }


    
   
    return(
        <>
        <h1>The MAGIC 8-Ball</h1>
        

        <button onClick={getAnswer}>THINK OF A QUESTION</button>
        <p>The MAGIC 8-Ball says.... <b style={{color: answer && answer.color}}>{answer && answer.msg}</b></p>
        </>
    )

}

export default EightBall;