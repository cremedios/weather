import 'whatwg-fetch';
import geoLocation from './geo-location';

const API_KEY = 'a111d13c900f70cddcc5cd82c24f5c12';//TODO: create a proxy so we can hide this key
const API_BASE_URL = 'http://api.openweathermap.org/data/2.5/';
const getByCoordinatesUrl =
  ({latitude, longitude}) => `${API_BASE_URL}forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
const getByCityNameUrl =
  (query) => `${API_BASE_URL}forecast?q=${query}&appid=${API_KEY}`;

// https://developers.google.com/web/updates/2015/03/introduction-to-fetch?hl=en#chaining-promises
const status = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};

export const getByGeoLocation = () => {
  return geoLocation.getLocation()
    .then(position => fetch(getByCoordinatesUrl(position.coords)))
    .then(status)
    .then(response => response.json());
};

export const getByCityName = (query) => {
  return fetch(getByCityNameUrl(query))
    .then(status)
    .then(response => response.json());
};