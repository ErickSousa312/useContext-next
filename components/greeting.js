import { useContext } from "react";
import { Context } from "./context";

const Greeting = ()=>{
    const {state, dispatch}= useContext(Context)

    useEffect(() => {
        updateGreeting();
      }, [time]);
    
      const updateGreeting = () => {
        let now = new Date();
        let hours = now.getHours();
        if (hours > 0 && hours < 12) {
          dispatch({type:"SET_GREET", payload:`Bom dia, ${myName}.`});
        } else if (hours >= 12 && hours < 18) {
            dispatch({type:"SET_GREET", payload:`Boa tarde, ${myName}.`});
        } else {
            dispatch({type:"SET_GREET", payload:`Boa noite, ${myName}.`});
        }
      }

      return(
        <h3>{state.greet}</h3>
      )
    
}

export default Greeting