import _ from 'lodash';
import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Zoom from 'react-reveal/Zoom';
import PropTypes from 'prop-types';
import WorkModal from './WorkModal';
import Flip from 'react-reveal/Flip';

// const WorkItem = ({ title, description, img, tags }) => (
//   <div style={{ height: '200px',
//                 padding: '60px',
//                 backgroundImage: `url(${img})`,
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundPosition: 'center center',}}>
//     <h1>{title}</h1>
//     <p>{description}</p>
//     <p>{tags}</p>
//   </div>
// );

class WorkItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      isModalOpen: false,
      carouselWidth: '600px',
    };
    this.handleResize = this.handleResize.bind(this);
    this.setCarouselWidth = this.setCarouselWidth.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
    this.setCarouselWidth();
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  setCarouselWidth() {
    if (this.state.windowWidth < 481) {
      this.setState({
        carouselWidth: '300px',
      });
    } else if (this.state.windowWidth >= 481 && this.state.windowWidth < 768) {
      this.setState({
        carouselWidth: '400px',
      });
    } else {
      this.setState({
        carouselWidth: '600px',
      });
    }
  }

  render() {
    // console.log("img z ITEM", this.props.img[0]);
    const { title, description, img, tags, scope, tools } = this.props;
    const { isModalOpen, carouselWidth } = this.state;

    const itemStyle = {
      backgroundImage: `url(${img[0]})`,
    };

    return (
      <div>
        <Zoom>
          <div style={itemStyle} className="work__item" onClick={() => this.openModal()} role="gallery miniature">
            <h1 className="work__title">{title}</h1>
            <p className="work__tag">{tags}</p>
          </div>
        </Zoom>
        <WorkModal className="work__modal" isOpen={isModalOpen} onClose={() => this.closeModal()}>
          <div className="modal-btn__container">
            <button className="modal__button" onClick={() => this.closeModal()}>✕</button>
          </div>
          <div className="modal__content">
            {/* <Flip left> */}
              <Carousel width={this.state.carouselWidth} cellAlign="center" framePadding="20px" slidesToShow={1} slidesToScroll="auto" autoplay swiping>
                {/* <div style={{backgroundImage: `url(.${img[0]})`}} className="carousel__item">
                </div> */}
                {
                  _.map(this.props.img, img => {
                    return (
                      <div key={img}>
                        <img src={img} className="modal__slider-img" alt="portfolio item" />
                      </div>
                    );
                  })
                }
              </Carousel>
            {/* </Flip> */}
            <div className="modal__caption">
              <h1 className="modal__title">{title}</h1>
              <p className="modal__description">{description}</p>
              <p className="modal__scope">{scope}</p>
              <p className="modal__tag">{tags}</p>
              {/* <p className="modal__tools">tools: {tools}</p> */}
            </div>
          </div>
        </WorkModal>
      </div>
    );
  }
}

WorkItem.proptypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.node,
  tags: PropTypes.node,
};

export default WorkItem;
