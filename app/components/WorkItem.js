import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WorkModal from './WorkModal';
import Carousel from 'nuka-carousel';
import Zoom from 'react-reveal/Zoom';
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
            isModalOpen: false
        }
    }

    openModal() {
        this.setState({isModalOpen: true});
    }

    closeModal() {
        this.setState({isModalOpen: false});
    }

  render() {
    // console.log("img z ITEM", this.props.img[0]);
    const { title, description, img, tags } = this.props;
    const { isModalOpen } = this.state;

    const itemStyle = {
      height: '200px',
      padding: '60px',
      backgroundImage: `url(${img[0]})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    };

    const buttonStyle = {
      fontSize: '2em',
      display: 'flex',
      alignSelf: 'flex-end',
    };

    const modalStyle = {
      // height: '600px',
      // display: 'flex',
      // justifyContent: 'space-around',
      // alignItems: 'center',
      // flexDirection: 'column-reverse',
    };

    const sliderStyle = {
      // width: '60vw',
      // height: '50vh',
      // display: 'flex',
      // justifyContent: 'space-between',
      // alignItems: 'center',
      // flexDirection: 'row',
    };

    const sliderItemBox = {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }

    const sliderItem = {
      height: '400px',
    };

    const captionStyle = {
      margin: '50px',
      position: 'relative',
      textAlign: 'center',
    };

    return (
      <div>
        <Zoom>
          <div style={itemStyle} onClick={() => this.openModal()}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{tags}</p>
          </div>
        </Zoom>
        <WorkModal className="work__modal" isOpen={isModalOpen} onClose={() => this.closeModal()}>
          <div style={{display:'flex', justifyContent:'flex-end'}}>
            <button className="modal__button" onClick={() => this.closeModal()}>✕</button>
          </div>
          <div className="modal__content">
            <Carousel width='600px' cellAlign='center' initialSlideHeight={400} framePadding='20px' slidesToShow={1} slidesToScroll='auto' swiping>
              {/* <div style={{backgroundImage: `url(.${img[0]})`}} className="carousel__item">
              </div> */}
              {
                _.map(this.props.img, img => {
                  return (
                    <div key={img}>
                      <img src={img} style={sliderItem} alt="portfolio image" />
                    </div>
                  );
                })
              }
            </Carousel>
            <div className="modal__caption">
              <h1>{title}</h1>
              <p>{description}</p>
              <p>{tags}</p>
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
