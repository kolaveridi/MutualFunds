

import React from 'react';
import { SearchBar } from 'react-native-elements';

export default class SearchBarComponent extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
    this.props.onInputChange(search);
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
