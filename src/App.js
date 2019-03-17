import React, { Component } from 'react';
import Container from './Container';
import Slider from './Slider';
import Header from './Header';
import Footer from './Footer';
// import './App.css';
import './netflix.css';


class App extends Component {
    
    render() {
        const categories = [
            {'name': 'Upcoming', 'category':'upcoming'},
            {'name': 'Popular', 'category':'popular'},
            {'name': 'Top Rated', 'category':'top_rated'},
            {'name': 'Now Playing', 'category':'now_playing'}
        ]
        return (
            <div className="App">
                <Header />
                <Slider />
                {
                    categories.map(category => (
                        <Container key={category} className='row' category={category} />
                    ))
                }
                <Footer />
            </div>
        );
    }
}

export default App;
