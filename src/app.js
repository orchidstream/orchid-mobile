import React, {Component} from 'react';
import {View, Button} from 'react-native';

class App extends Component {
  onPresentPress() {

  }

  onViewPress() {

  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.mainView}>
          <Button
            title="Present"
            onPress={this.onPresentPress}
            style={styles.button}
          />
          <Button
            title="View"
            onPress={this.onViewPress}
            style={styles.button}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  mainView: {

  },
  headerView: {

  },
  button: {

  }
};

export default App;