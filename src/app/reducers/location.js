import {
  REQUEST_BY_GEO_LOCATION,
  REQUEST_BY_BY_CITY_NAME,
  RECEIVE_BY_GEO_LOCATION,
  RECEIVE_BY_CITY_NAME,
  RECEIVE_ENDED_WITH_ERROR
} from '../actions/network-actions';

const location = (state = {}, action) => {
  switch (action.type) {
  case REQUEST_BY_GEO_LOCATION:
  case REQUEST_BY_BY_CITY_NAME:
    return {
      ...state,
      error: null,
      requesting: true,
    };
  case RECEIVE_BY_GEO_LOCATION:
    const { name, country } = action.location.city;
    return {
      ...action.location,
      requesting: false,
      searchedText: `${name}, ${country}`,
    };
  case RECEIVE_BY_CITY_NAME:
    return {
      ...action.location,
      requesting: false,
    };
  case RECEIVE_ENDED_WITH_ERROR:
    return {
      ...state,
      error: action.error,
      requesting: false,
    };
  default:
    return state;
  }
};

export default location;