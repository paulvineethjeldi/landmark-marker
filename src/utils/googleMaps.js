import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyDHIcfNlMlax1TzDjgOh0K-_TVASkLVdoU",
  version: "weekly",
});

function loadGoogleMap() {
  return loader.load().then(() => {
    const map = new Window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    return map;
  });
}

loadGoogleMap().then((map) => {
  console.log("Map loaded:", map);
});