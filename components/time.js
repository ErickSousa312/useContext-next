import { useContext } from "react";
import { Context } from "./context";


const Time = ()=>{

    const{state, dispath} = useContext(Context)

    useEffect(() => {
        let timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
      }, []);
    
    const updateTime = () => {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let hourStr = hours < 10 ? '0' + hours : hours.toString();
        let minStr = minutes < 10 ? '0' + minutes : minutes.toString();
    
        dispath({type:"SET_TIME", payload:`${hourStr}:${minStr}`});
      }

    return(
        <div>
            {state.time}
        </div>
    )
}

export default Time