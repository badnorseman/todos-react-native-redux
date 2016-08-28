import React, { Component, PropTypes } from 'react'
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  View
} from 'react-native'
import AddTodo from '../containers/AddTodo'
import FilterButton from '../containers/FilterButton'
import VisibleTodoList from '../containers/VisibleTodoList'
import paddingTop from '../constants/paddingTop'

export default class Todos extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  };
  componentWillMount() {
    this.setState({ visibleHeight: Dimensions.get('window').height })
  }
  componentDidMount() {
    Keyboard.addListener('keyboardWillShow', (ev) => {
      this.setState({ visibleHeight: Dimensions.get('window').height - ev.endCoordinates.height })
    })
    Keyboard.addListener('keyboardWillHide', () => {
      this.setState({ visibleHeight: Dimensions.get('window').height })
    })
  }
  render() {
    const { navigator } = this.props
    const height = this.state.visibleHeight
    return (
      <View style={[ styles.container, { paddingTop }, { height } ]}>
        <FilterButton />
        <VisibleTodoList navigator={navigator} />
        <AddTodo />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(66,66,66)',
    flexDirection: 'column'
  }
})
