import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  render() {
    return <div>Lyrical</div>;
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default SongList;
