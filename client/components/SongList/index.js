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

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default SongList;
