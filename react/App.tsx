import React from 'react'
import Form from './Components/Form/'
// import { canUseDOM } from 'vtex.render-runtime'

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://custompopup--levisiac.myvtex.com/_v/private/admin-graphql-ide/v0/vtex.store-graphql@2.147.4",
  cache: new InMemoryCache()
});

const App = () => {

  // const handleKeyDown = (event: any) => {
  //   console.log('A key was pressed', event.keyCode);
  // };

  // useEffect(() => {
  //   window.addEventListener('keydown', handleKeyDown);

  //   // cleanup this component
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);
  return (
    <>
      <ApolloProvider client={client}>
        <Form />
      </ApolloProvider>
    </>
  )
}

export default App

// const handleEvents = () => {
//   console.log("aqui")
// }

// if (canUseDOM) {
//   window.addEventListener('message', handleEvents)
// }
