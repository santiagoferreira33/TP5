import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { counterActions } from '../state/actions';

class Controls extends React.Component {
  render() {
    const { addCounter, removeCounter } = this.props;

    return (
      <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonAdd} onPress={addCounter}>
            <Text style={styles.icon}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRemove}  onPress={removeCounter}>
            <Text style={styles.icon}>-</Text>
          </TouchableOpacity>
        </View>

      /*<View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={addCounter} >
          <Text style={styles.text}> Add counter </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={removeCounter} >
          <Text style={styles.text}> Remove counter </Text>
        </TouchableOpacity>
      </View>*/
    );
  }
}

const styles = StyleSheet.create({
 /* container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#4A6075',
  },

  button: {
    backgroundColor: '#2c3e50',
    padding: 15,
  },

  text: {
    color: '#fff',
    fontWeight: '700',
  },*/

    buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  buttonAdd: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },

  buttonRemove: {
    backgroundColor: '#e74c3c',
    paddingVertical: 15,
    paddingHorizontal: 35,
  },

  icon: {
    color: '#2c3e50',
    fontSize: 45,
  },
});

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  addCounter: counterActions.addCounter,
  removeCounter: counterActions.removeCounter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls);
