import {
  getByGeoLocation,
  getByCityName,
} from '../utility/api';

//COMMON LOCATION
export const RECEIVE_ENDED_WITH_ERROR = 'RECEIVE_ENDED_WITH_ERROR';
const receiveEndedWithError = (error) => {
  return {
    type: RECEIVE_ENDED_WITH_ERROR,
    error
  };
};

// WEATHER BY GEO LOCATION
export const REQUEST_BY_GEO_LOCATION = 'REQUEST_BY_GEO_LOCATION';
const requestByGeoLocation = () => {
  return {
    type: REQUEST_BY_GEO_LOCATION,
  };
}

export const RECEIVE_BY_GEO_LOCATION = 'RECEIVE_GEO_LOCATION';
const receiveByGeoLocation = (location) => {
  return {
    type: RECEIVE_BY_GEO_LOCATION,
    location
  };
};

export const fetchByGeoLocation = () => {
  return (dispatch) => {
    dispatch(requestByGeoLocation());

    return getByGeoLocation()
    .then((location) => {
      dispatch(receiveByGeoLocation(location));
    })
    .catch(error => {
      dispatch(receiveEndedWithError(error));
    });
  };
};

// WEATHER BY CITY NAME
export const REQUEST_BY_CITY_NAME = 'REQUEST_BY_CITY_NAME';
const requestByCityName = () => {
  return {
    type: REQUEST_BY_CITY_NAME,
  };
}

export const RECEIVE_BY_CITY_NAME = 'RECEIVE_BY_CITY_NAME';
const receiveByCityName = (location) => {
  return {
    type: RECEIVE_BY_CITY_NAME,
    location
  };
};

export const fetchByCityName = (query) => {
  return (dispatch) => {
    dispatch(requestByCityName());

    return getByCityName(query)
    .then((location) => {
      dispatch(receiveByCityName(location));
    })
    .catch(error => {
      dispatch(receiveEndedWithError(error));
    });
  };
};


