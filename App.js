import React from 'react';
import { StyleSheet} from 'react-native';
import { ApolloProvider} from '@apollo/react-hooks';
import ApolloClient,{InMemoryCache} from 'apollo-boost';
import HomeScreen from './screens/Homescreen'


const client = new ApolloClient({
  uri: 'https://covid19-graphql.netlify.app/',
  cache: new InMemoryCache(),
});




export default function App() {
  return (
    <ApolloProvider client={client}>
      <HomeScreen />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
