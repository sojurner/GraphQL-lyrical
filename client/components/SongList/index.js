import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {
  renderSongs() {
    if (!this.props.data.loading) {
      console.log(this.props.data.songs);
      return this.props.data.songs.map((song, index) => {
        return (
          <li key={song.id} className="collection-item">
            {song.title}
          </li>
        );
      });
    } else {
      return;
    }
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div>{!this.props.data.loading && <div>{this.renderSongs()}</div>}</div>
    );
  }
}

// 1. identify data required
// 2. write query in Graphiql and in component file
// 3. Bond query + component
// 4. Access data

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
