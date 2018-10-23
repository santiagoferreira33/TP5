import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Controls from './components/Controls';
import CounterContainer from './components/CounterContainer';
import store from './state/store';

class App extends React.Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <View style={styles.container}>
          <Text style={styles.title}>
            dale
          </Text>

          <Controls />

          <ScrollView style={styles.scrollViewContainer}>
            <CounterContainer />
          </ScrollView>
          <Text> Total </Text>
          <Text style={styles.counter}> {8} </Text>
          
            <Text style={styles.boton}>Guardar</Text>
         
        </View>
      </ReduxProvider>
    );
  }
}

const styles = StyleSheet.create({

  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    borderBottomWidth: 2,
    borderColor: '#e1e1e1',
    marginVertical: 10,
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'center',
  },

  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    borderBottomWidth: 2,
    borderColor: '#e1e1e1',
    marginVertical: 10,
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
  },

  container: {
    flex: 1,
    marginTop: 20,
  },

  title: {
    color: '#2c3e50',
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },

  scrollViewContainer: {
    flex: 1,
  },
});

export default App;
