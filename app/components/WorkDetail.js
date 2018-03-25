import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';

class WorkDetail extends Component {
  render() {
    console.log('works from detail', this.props.works);

    return (
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row-reverse" }}>
        <div style={{ width: "60vw", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
          <Carousel cellSpacing={20} cellAlign="center" autoplay autoplayInterval={1000} swiping>
            <div style={{backgroundImage: `url(.${this.props.works[1].img[0]})`}} className="carousel__item">
              {/* <img className="carousel__img" src="`.${this.props.works[0].img[0]}`" alt="" /> */}
            </div>
            <div className="carousel__item">
              <img className="carousel__img" src="../vendors/img/hero.png" alt="" />
            </div>
            <div className="carousel__item">
              <img className="carousel__img" src="../vendors/img/hero.png" alt="" />
            </div>
          </Carousel>
        </div>
        <div style={{ width: "30vw", height: "80vh", backgroundColor:"lightblue"}}>
          <p>sgfddfgdfgfdsgdfgfdgfgf</p>
        </div>
      </div>
    );
  }
}

// export default WorkDetail;
function mapStateToProps(state) {
    console.log('state form detail', state);
    const { works } = state;
    return {
        works
    }
}

export default connect(mapStateToProps, null)(WorkDetail);
