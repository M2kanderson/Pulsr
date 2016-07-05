const React = require('react');
const PhotoStore = require('../stores/photo_store');
const PhotoActions = require('../actions/photo_actions');
const Modal = require('react-modal');
const ModalStyle = require('../photo_modal_style');
const PhotoDetail = require('./photo_detail');
const Slider = require('react-slick');


const TestSlider = React.createClass({

  render: function() {
    let settings ={
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll : 1,
      initialSlide: 2,
    };
    return (
      <div className='photo-slider-container'>
        <Slider {...settings}>
          <img src='http://placekitten.com/g/400/200' />
          <img src='http://placekitten.com/g/400/200' />
          <img src='http://placekitten.com/g/400/200' />
          <img src='http://placekitten.com/g/400/200' />
        </Slider>
      </div>

    );
  }

});

module.exports = TestSlider;
