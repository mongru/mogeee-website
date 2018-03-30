import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WorkModal from './WorkModal';
import Carousel from 'nuka-carousel';

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
    console.log("img z ITEM", this.props.img[0]);
    const { title, description, img, tags } = this.props;
    const { isModalOpen } = this.state;

    const style = {
      height: '200px',
      padding: '60px',
      backgroundImage: `url(${img[0]})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    };

    return (
      <div>
        <div style={style} onClick={() => this.openModal()}>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{tags}</p>
        </div>
        <WorkModal className="main__content--modal" isOpen={isModalOpen} onClose={() => this.closeModal()}>
          <button className="modal--btn" onClick={() => this.closeModal()}>✕</button>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row-reverse" }}>
              <div style={{ width: "60vw", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <Carousel width='100%' cellAlign="center" slideWidth={1.0} slidesToShow={1} autoplay autoplayInterval={2000} wrapAround swiping>
                  {/* <div style={{backgroundImage: `url(.${img[0]})`}} className="carousel__item">
                  </div> */}
                  {
                    _.map(this.props.img, img => {
                      return (
                        <div key={img} className="carousel__item">
                          <img className="carousel__img" src={img} alt="portfolio image" />
                        </div>
                      );
                    })
                  }
                </Carousel>
              </div>
              <div style={{ width: "30vw", height: "80vh", backgroundColor:"lightblue"}}>
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
