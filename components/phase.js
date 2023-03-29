import { useContext } from "react";
import { Context } from "./context";

const Phase = () => {

    const { state, dispatch } = useContext(Context)

    useEffect(() => {
        const getPhrase = async () => {
            axios.get('https://allugofrases.herokuapp.com/frases/random')
                .then((response) => {
                    if (!response) {
                        return json(response)
                    } else {
                        throw new Error("error na requisição")
                    }
                })
                .then((data) => {
                    dispatch({ type: 'SET_PHRASE', payload: data.frase })
                    dispatch({ type: 'SET_PHRASE_AUTHOR', payload: data.autor })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        getPhrase();
    }, []);

    return (
        <>
            {state.phrase}
            {state.phraseAuthor}
        </>
    )

}

export default Phase