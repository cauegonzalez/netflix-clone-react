import React, { Component } from 'react';

const apiKey = 'e5693481ef000bfdd855a0f21ad39631';

class Container extends Component {
    state = {
        movies: []
    }
    
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.category.category}?api_key=${apiKey}`)
            .then(result => {
                return result.json();
            })
            .then(data => {
                this.setState({ movies: data.results});
            })
    }
    
    render() {
        const {movies} = this.state;
        const sourceImage = 'http://image.tmdb.org/t/p/w500/';

        return (
            <div className="App">
                <div className="list-title">
                    <h3>
                        { this.props.category.name }
                    </h3>
                </div>
                
                <div className="list-container">
                    <span className="left-controls" role="button"></span>
                    <div className="module-section clearfix">
                        <ul id="content">
                            <div className="listRow">
                                { movies.map(movie => (
                                    <a className="tile" href={"#/movie/"+movie.id}>
                                        <div className="tile-img">
                                            <img className="tile-img" alt={movie.title} src={`${sourceImage}${movie.backdrop_path}`} />
                                        </div>
                                        <div className=" photo-overlay">
                                            <div className="tile-text-container">
                                                <div className="playbtn-container">
                                                    <button className="playBtn ">▶</button>
                                                </div>
                                                <div>
                                                    <h5 className="search-tile-title longer-title">{movie.title}</h5>
                                                </div>
                                                <div>
                                                    <p className="tile-desc">{movie.overview.substring(0, 135)} ... read more</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;
