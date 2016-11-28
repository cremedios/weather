# Simple Weather Page

### Overview
Implementation of a weather forecast page. The idea here is to exercise as much as possible all areas involving modern frontend development, from build tools to testing/presentation frameworks.

### Next steps

1. Implement testing with jest
2. Improve interface
2.1. Plot all data points with temperature
2.2. Allow selection of single data point to display more detail
2.3. Use graphics to represent the selected data point
2.4. Use Sass to better leverage bootstrap
3. Allow user to pin selected locations
4. Allow offline usage
5. Build backend proxy to access api.openweather.com
5.1. Cache requests
5.2. Bypass security restrictions (geoLocation) for not using https
5.3. Remove api key from client
5.4. Logging
6. Linting
7. Deploy automation

### Usage

1. Development - `npm run dev` && `npm run server` will use `webpack --watch` and create a server at http://localhost:8080
2. Build to production - `npm run build`

### Demo
http://www.carlosremedios.com/weather
