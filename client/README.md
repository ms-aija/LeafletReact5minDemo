## Setting up a basic leaflets.js map in React

*See example in Map.js component. All CSS styles are found in index.css.*

1. Install `react-leaflet` and `leaflet`
2. Import `MapContainer`, `TileLayer`, `Marker`, `Popup` from `react-leaflet` and  `Icon` from `leaflet`
3. Add leaflet stylesheet and scripts to `index.html` `<head>` (see https://leafletjs.com/examples/quick-start/)
4. Add `.leaflet-container` class to css with map dimensions
5. Add `MapContainer` component inside a `div` with id="map" (see https://react-leaflet.js.org/)

--OPTIONAL--

6. Create a custom marker by defining new instance of `Ico`n (see customIcon variable in the example) and add `icon` property to `Marker` component
7. Add custom tiles by updating `attribution` and `url` properties in `TileLayer` component (see some options at https://leaflet-extras.github.io/leaflet-providers/preview/) (and watch The Billion Dollar Code https://www.imdb.com/title/tt15392100/ )


