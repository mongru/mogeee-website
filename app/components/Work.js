import React from 'react';
// import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import { works } from '../work_content';
import WorkItem from './WorkItem';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      works ,
    };
  }

  // componentDidMount() {
  //   WorkService()
  //     .then(works => this.setState({ works }));
  // }

  renderGallery() {
    // const gallery = this.state.works.map((work, id) => <li key={id} className="gallery__item"><Link to={`/work/${work.id}`}><WorkItem {...work} /></Link></li>);
    return this.state.works.map((work) => {
      return (
        <li key={work.id} className="gallery__item">
          <Link to={`/work/${work.id}`}>
            <WorkItem {...work} />
          </Link>
        </li>
      );
    });
  }

  filterProjects() {
    console.log("AAAA");
  }

  render() {
    // const gallery = this.state.works.map((work, id) => <li key={id} className="gallery__item"><WorkItem {...work} /></li>);

    return (
      <div className="work__wrapper">
        <section className="gallery">
          <div className="gallery__container">
            {this.renderGallery()}
          </div>
        </section>
        <aside>
          FILTER
          <button onClick={this.filterProjects}>design</button>
          <button onClick={this.filterProjects} >development</button>
          <button onClick={this.filterProjects}>all projects</button>
        </aside>
      </div>
    );
  }
}

export default Work;
