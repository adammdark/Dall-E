import { surpriseMePrompts } from "../constants";

export const getRandomPrompts = (prompt)=>{
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex]; 

    if(prompt === randomPrompt){
        return getRandomPrompts(prompt)
    }
  
    return randomPrompt;
}

