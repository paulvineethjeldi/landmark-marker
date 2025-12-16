import {Client} from "@googlemaps/google-maps-services-js"; 
import axiosInstance from "axios";

/* eslint-disable no-unused-vars */
// import React, { useEffect } from "react";
// import { Loader } from "@googlemaps/js-api-loader";


// /* let google = Window.google; */
// const YOUR_API_KEY = ""


let map;
 const GOOGLE_MAPS_API_KEY = "KEY";

const client = new Client({});

client
  .elevation({
    params: {
      locations: [{ lat: 45, lng: -110 }],
      key: GOOGLE_MAPS_API_KEY
    },
    timeout: 1000 // milliseconds
  }, axiosInstance)
  .then(r => {
    console.log(r.data.results[0].elevation);
  })
  .catch(e => {
    console.log(e);
  });


export default Map();
