# Simple Weather Page

### Overview
Implementation of a weather forecast page. The idea here is to exercise as much as possible all areas involving modern frontend development, from build tools to testing/presentation frameworks.

### Next steps

1. Implement testing with jest
2. Improve interface
 1. Plot all data points with temperature
 2. Allow selection of single data point to display more detail 
 3. Use graphics to represent the selected data point
 4. Use Sass to better leverage bootstrap
 5. Better display error messages
3. Allow user to pin selected locations
4. Allow offline usage
5. Build backend proxy to access api.openweather.com
 1. Cache requests
 2. Bypass security restrictions (geoLocation) for not using https
 3. Remove api key from client
 4. Logging
6. Linting
7. Deploy automation

### Usage

1. Development
 * `npm run dev` builds the frontend
 * `npm run start` creates a server at http://localhost:8080
2. Production
 * `npm run build` creates an optimized build for production

### Demo
http://www.carlosremedios.com/weather
