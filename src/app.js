import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.onPresentPress = this.onPresentPress.bind(this);
    this.onViewPress = this.onViewPress.bind(this);
  }

  state = {
    mode: null
  };

  onPresentPress() {
    this.setState({
      mode: 'presenter'
    })
  }

  onViewPress() {
    this.setState({
      mode: 'viewer'
    })
  }

  renderVideo() {
    switch (this.state.mode) {
      case 'presenter':
        return <VideoPresenter />;
      case 'viewer':
        return <VideoViewer />;
      default:
        return <Text style={styles.text}>Please, select mode</Text>
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.headerView}>
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
        <View style={styles.video}>
          {this.renderVideo()}
        </View>
      </View>
    )
  }
}

const styles = {
  mainView: {
    flex: 1,
    flexDirection: 'column'
  },
  headerView: {
    flex: 1,
    width: null,
  },
  button: {
    flex: 1,
    paddingLeft: 20,
    alignSelf: 'stretch'
  },
  text: {
    color: '#000000',
    fontSize: 18,
    paddingTop: 15,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  video: {
    flex: 8
  }
};

export default App;