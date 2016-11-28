import React, { PropTypes } from 'react';

const ForecastDisplayItem = ({
  item,
}) => (
  <li>
    {item.dt_txt},
    {300 - Math.round(item.main.temp)}C,
    {item.weather.map(weatherItem => weatherItem.main )}
  </li>
);

ForecastDisplayItem.propTypes = {
  item: PropTypes.shape({
    dt_txt: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }),
    weather: PropTypes.array.isRequired,
  }),
};

export default ForecastDisplayItem;