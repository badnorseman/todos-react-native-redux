import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };
  constructor() {
    super()
    this.state = { text: '' }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            autoCorrect={false}
            enablesReturnKeyAutomatically={true}
            keyboardAppearance="dark"
            maxLength={255}
            placeholder="I want to do..."
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="done"
            onChangeText={text => this.setState({ text })}
            onSubmitEditing={() => this.onSubmit()}
            value={this.state.text}
          />
        </View>
      </View>
    )
  }
  onSubmit() {
    this.props.dispatch(addTodo(this.state.text))
    this.setState({ text: '' })
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  inputContainer: {
    backgroundColor: 'rgb(33,33,33)',
    height: 48,
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center'
  },
  inputText: {
    color: 'rgb(255,255,255)',
    fontSize: 16,
    fontWeight: '500',
    flex: 1
  }
})

export default connect()(AddTodo)
