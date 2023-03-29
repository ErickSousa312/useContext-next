import '@/styles/globals.css'
import { useRouter } from "next/router";
import { Context, reducer, initialState } from '@/components/context'
import { useReducer } from 'react';

function App({ Component, pageProps, session }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={{state, dispatch}}>
      <SnackbarProvider maxSnack={3}>
        <MainContainer session={session}>
          <Component{...pageProps} />
        </MainContainer>
      </SnackbarProvider>
    </Context.Provider>
  )

}

export default App;