import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

import api from "./../services/api";
import Filmes from "./../components/Filmes/filmes";

interface State {
  filmes: Array<{ id: number; nome: string }>;
  loading: boolean;
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      filmes: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await api.get("r-api.?api=filmes");
    console.log(response.data);
    this.setState({
      filmes: response.data,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size={50} color="#121212" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.filmes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Filmes data={item} />}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default App;
