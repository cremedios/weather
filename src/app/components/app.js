import React from 'react';
import { connect } from 'react-redux';
import ForecastDisplay from './forecast/forecast-display';
import SearchBox from './search-box';
import {
  fetchByGeoLocation,
  fetchByCityName,
} from '../actions/network-actions';

const App = ({
  location,
  searchByText,
  searchByGeoLocation,
}) => (
  <div className="container">
    <SearchBox
      text={location.searchedText}
      disabled={location.requesting}
      onSearchByText={searchByText}
      onSearchByGeoLocation={searchByGeoLocation} />
    {
      location.error ? <span>An error has happened: {location.error.message}</span> : null
    }
    <ForecastDisplay forecast={location} />
  </div>
)

const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchByText: (query) => {
      dispatch(fetchByCityName(query));
    },
    searchByGeoLocation: () => {
      dispatch(fetchByGeoLocation());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);