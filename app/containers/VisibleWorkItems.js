import { connect } from 'react-redux'
import { toggleWork } from '../actions'
import Work from '../components/Work'
 
const getVisibleWorks = (works, filter) => {
  switch (filter) {
    case 'SHOW_DESIGN':
      // works.filter(w => console.log(w.tags === "design" ? w : ''));
      return works.filter(w => (w.tags === tags) ? w : '');
    case 'SHOW_DEVELOPMENT':
      return works.filter(w => (w.tags === tags) ? w : '');
    case 'SHOW_ALL':
    default:
      return works
  }
}
 
const mapStateToProps = state => ({
  works: getVisibleWorks(state.works, state.visibilityFilter)
})
 
const mapDispatchToProps = dispatch => ({
  toggleWork: tags => dispatch(toggleWork(tags))
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);
