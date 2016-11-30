import React, { PropTypes } from 'react';
import ForecastDisplayItem from './forecast-display-item';

const ForecastDisplay = ({forecast}) => (
  <div>
    <h2>{forecast.city ? `${forecast.city.name}, ${forecast.city.country}` : null}</h2>
    <ul>
    {
      forecast.list
        ? forecast.list.map((item, i) => <ForecastDisplayItem item={item} key={i} />)
        : null
    }
    </ul>
  </div>
);

ForecastDisplay.propTypes = {
  forecast: PropTypes.shape({
    city: PropTypes.shape({
      name: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
    list: PropTypes.array,
  }),
};

export default ForecastDisplay;