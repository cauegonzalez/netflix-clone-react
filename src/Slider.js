import React, { Component } from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import CarouselCaption from 'react-bootstrap/CarouselCaption';

class Slider extends Component {
    
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block img-fluid" src="https://s-media-cache-ak0.pinimg.com/originals/26/00/d5/2600d5fda64fb9356b117219ca2bfce9.jpg" alt="First slide" />
                    <Carousel.Caption>
                        <h3 className="title">Stranger Things</h3>
                        <p className="sub-title"><b>97% Match 2016 TV-14 season 1</b><br /><br />Phasellus a nulla vitae augue convallis efficitur.<br />Nam gravida viverra velit venenatis elementum.<br />Phasellus egestas volutpa</p>
                        <p className="sub-title">Cast:<br /></p>
                        <p className="castGenreList">Phasellus egestas, volutpat tortor, eget eleifend, massa</p>
                        <p className="sub-title">Genres:<br /></p><p className="castGenreList">volutpat tortor, massa</p>
                        <button type="button" className="addListBtn">+</button>MY LIST
                    </Carousel.Caption>
                </Carousel.Item>
                <CarouselItem>
                    <img className="d-block img-fluid" src="https://resi.ze-robot.com/dl/wa/wallpaper-i-made-from-the-new-blade-runner-2049-reveal-trailer-multiple-albums-1920%C3%97811.jpg" alt="Second slide" />
                    <CarouselCaption>
                        <h3 className="title">Blade Runner 2047</h3>
                        <p className="sub-title"><b>97% Match 2016 TV-14 season 1</b><br /><br />Phasellus a nulla vitae augue convallis efficitur.<br />Nam gravida viverra velit venenatis elementum.<br />Phasellus egestas volutpa</p>
                        <p className="sub-title">Cast:<br /></p>
                        <p className="castGenreList">Phasellus egestas, volutpat tortor, eget eleifend, massa</p>
                        <p className="sub-title">Genres:<br /></p><p className="castGenreList">tortor, eleifend</p>
                        <button type="button" className="addListBtn">+</button>MY LIST
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                    <img className="d-block img-fluid" src="http://www.studiorjm.net/wp-content/uploads/2013/10/Gravity.jpg" alt="Third slide" />
                    <CarouselCaption>
                        <h3 className="title">Gravity</h3>
                        <p className="sub-title"><b>97% Match 2016 TV-14 season 1</b><br /><br />Phasellus a nulla vitae augue convallis efficitur.<br />Nam gravida viverra velit venenatis elementum.<br />Phasellus egestas volutpa</p>
                        <p className="sub-title">Cast:<br /></p>
                        <p className="castGenreList">Phasellus egestas, volutpat tortor, eget eleifend, massa</p>
                        <p className="sub-title">Genres:<br /></p>
                        <p className="castGenreList">Phasellus, volutpat</p>
                        <button type="button" className="addListBtn">+</button>MY LIST
                    </CarouselCaption>
                </CarouselItem>
            </Carousel>
        );
    }
}

export default Slider;
