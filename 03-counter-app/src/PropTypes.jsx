import './app.css';
import PropTypes from 'prop-types';

// Props and PropTypes

export const App = ({ name, profession, experience }) => {
  return (
    <div>
        <h3>{ name }</h3>
        <p>{ profession }</p>
        <p>{ experience	}</p>
    </div>
  )
}

// PropTypes

App.propTypes = {
    name: PropTypes.string,
    profession: PropTypes.string,
    experience: PropTypes.number.isRequired,
}

App.defaultProps = {
    experience: 2,
    profession: 'Student',
}
