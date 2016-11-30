import ForecastDisplayItem from '../forecast/forecast-display-item';

describe('ForecastDisplayItem', () => {
  let forecastDisplayItem = null;
  let reactInstance = null;

  beforeEach(() => {
    reactInstance = new ForecastDisplayItem({
      item: {
        main: {
        },
        weather: []
      }
    });
  });

  it('should render in an li', () => {
      expect(reactInstance.type).toEqual('li');
  });
});