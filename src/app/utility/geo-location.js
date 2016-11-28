const geoLocation = {
  getLocation: () => {
    const promise = new Promise((resolve, reject)=>{
      if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
      } else {
          reject(new Error('Your browser does not support Geo Location.'));
      }
    });
    return promise;
  }
};

export default geoLocation;