import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
// import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import { works } from '../work_content';
import WorkItem from './WorkItem';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters, setWorks, setVisibilityFilter } from '../actions';

class Work extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     works ,
  //   };
  // }

  componentDidMount() {
    this.props.setWorks(works);
    // return this.state.works.map((work) => {
    //   return (
    //     <li key={work.id} className="gallery__item">
    //       <Link to={`/work/${work.id}`}>
    //         <WorkItem {...work} />
    //       </Link>
    //     </li>
    //   );
    // });
  }

  filterProjects() {
    console.log(this.state.works);

  }

  renderGallery() {
    // const gallery = this.state.works.map((work, id) => <li key={id} className="gallery__item"><Link to={`/work/${work.id}`}><WorkItem {...work} /></Link></li>);
    console.log('props from Work.js', this.props.works);
    return this.props.works.map((work) => {
      return (
        <li key={work.id} className="gallery__item">
          <Link to={`/work/${work.id}`}>
            <WorkItem {...work} />
          </Link>
        </li>
      );
    });
  }


  render() {
    // const gallery = this.state.works.map((work, id) => <li key={id} className="gallery__item"><WorkItem {...work} /></li>);

    return (
      <div className="work__wrapper">
        <section className="gallery">
          <div className="gallery__container">

            {
              _.map(this.props.works, work => {
                return (
                  <li key={work.id} className="gallery__item">
                    <Link to={`/work/${work.id}`}>
                      <WorkItem {...work} />
                    </Link>
                  </li>
                );
              })
            }
          </div>
        </section>
        <aside style={{ height: "50vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
          FILTER
          {/* <button onClick={this.filterProjects}>design</button>
          <button onClick={this.filterProjects}>development</button>
          <button onClick={this.filterProjects}>all projects</button> */}
          <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
          </FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_DESIGN}>
            DESIGN
          </FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_DEVELOPMENT}>
            DEVELOPMENT
          </FilterLink>
        </aside>
      </div>
    );
  }
}


function mapStateToProps(state) {
    console.log('state', state);
    const { works } = state;
    return {
        works
    }
}

export default connect(mapStateToProps, {setWorks})(Work);
