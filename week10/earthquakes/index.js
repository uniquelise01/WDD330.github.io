
import { getJSON, getLocation } from 'utilities.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';


function testGetQuakesForLocation() {
        getLocation(maxradiuskm);

        // call the getLocation function to get the lat/long

        // use that information to build out the correct URL
        const geoUrl = baseUrl + 3;// add location information here
        // use the url to request the correct quakes 

        //log out the quakes for now.
}
testGetQuakesForLocation();


//let locResp = await getLocation();
  // take a look at where the information we need is in the returned object
//console.log(locResp);
  // we really only need the coords portion
  //const location = locResp.coords;
  // build out the url with the location
  //const radius = 100;
  //const query =
    //baseUrl +
    //`&latitude=${location.latitude}&longitude=${location.longitude}&maxradiuskm=${radius}`;
  //console.log(query);
  // fetch the data
  //quakes = await getJSON(query);