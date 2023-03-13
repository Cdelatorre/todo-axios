import React, { Component } from "react";
import { list as listPhotos } from "../../services/PhotoService";

class Photos extends Component {
  state = {
    photos: [],
  };

  componentDidMount() {
    listPhotos()
      .then((photos) => {
        this.setState({
          photos: photos.splice(1, 20),
        });
      })
      .catch(() => {});
  }

  render() {
    return (
      <div className="mt-4">
        Acá fotos!
        {this.state.photos.map((photo) => {
          return (
            <div key={photo.id}>
              <img src={photo.url} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Photos;
