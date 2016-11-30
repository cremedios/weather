import React from 'react'
import { shallow, mount, render } from 'enzyme';

import ForecastDisplay from '../forecast/forecast-display';
import ForecastDisplayItem from '../forecast/forecast-display-item';

describe('ForecastDisplay', () => {
  const testParameters = {
    list: [
      { dt_txt: "1", main: { temp: 352 }, weather: [] },
      { dt_txt: "2", main: { temp: 368 }, weather: [] },
      { dt_txt: "3", main: { temp: 394 }, weather: [] }
    ],
    city: {
      name: 'Porto',
      country: 'Portugal',
    },
  };

  it('should render a H2', () => {
    const forecastDisplay = shallow(<ForecastDisplay forecast={testParameters} />);
    expect(forecastDisplay.contains(<h2>Porto, Portugal</h2>)).toBe(true);
  });

  it('should render 3 ForecastDisplayItem', () => {
    const forecastDisplay = shallow(<ForecastDisplay forecast={testParameters} />);
    expect(forecastDisplay.find(ForecastDisplayItem)).toHaveLength(3);
  });
});