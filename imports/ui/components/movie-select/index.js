import React from 'react';
import ReactSwipe from 'react-swipe';
import './styles';

export default class MovieSelect extends React.Component {
  render({ props } = this) {
    const { movie } = props;
    
    return (
      <div className="movie">
        <ReactSwipe className="movie__photos" swipeOptions={{continuous: false}}>
          {movie.photos.map(this.renderMovieCover.bind(this))}
        </ReactSwipe>
        <div className="movie__avatars">
          {this._renderAvatars(props.movie.opinions)}
        </div>
        <div className="movie__title">{movie.title}</div>
        <div className="movie__year">{movie.year}</div>
        <div className="movie__actors">{movie.actors}</div>
        <div className="movie__year">{movie.year}</div>
        <div className="movie__gender">{movie.gender}</div>
      </div>
    );
  }

  renderMovieCover(photo) {
    return (
      <div key={photo.url} className="movie__photo-wrapper">
        <div className="movie__photo" style={this._getBackgroundImage(photo.url)}></div>
      </div>
    );
  }

  renderMovie(movie) {
    return (
      <div className="movie" key={movie.id}>
        <div className="movie__cover" style={this._getBackgroundImage(movie.url)}></div>
        <div className="movie__avatars">
          {this._renderAvatars(movie.opinions)}
        </div>
        <div className="movie__title">{movie.title}</div>
        <div className="movie__year">{movie.year}</div>
        <div className="movie__actors">{movie.actors}</div>
        <div className="movie__year">{movie.year}</div>
        <div className="movie__gender">{movie.gender}</div>
      </div>
    );
  }

  _renderAvatars(opinions) {
    return opinions.map((person) => (
     <div key={person.id} className="collection-item avatar">
       <img src="https://scontent.flis2-1.fna.fbcdn.net/v/t31.0-8/14324603_10206532643426573_5341801418521238848_o.jpg?oh=0ef80b31bb03f0e4ebe37ff8bdb483fa&oe=59E63200" className="circle" />
    </div>
    ));
  }

  _getBackgroundImage(url) {
    return {
      backgroundImage: `url(${url})`
    };
  }
}
