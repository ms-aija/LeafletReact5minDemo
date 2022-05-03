## Setting up a basic leaflets.js map in React

*See example in Map.js component. All CSS styles are found in index.css.*

1. Install `react-leaflet` and `leaflet` (*see code in Map.js component*)

2. Import `MapContainer`, `TileLayer`, `Marker`, `Popup` from `react-leaflet` and  `Icon` from `leaflet` (*see code in Map.js component*)

3. Add leaflet stylesheet and scripts to `index.html` `<head>` (*see code in index.html* and [leaflet.js docs](https://leafletjs.com/examples/quick-start/))

4. Add `.leaflet-container` class to css with map dimensions. Note that the class **does not** have to added anywhere in the map component itself. (*see code in index.css*)

5. Add `MapContainer` component inside a `div` with id="map" (*see code in Map.js component* and [react leaflet docs](https://react-leaflet.js.org/))

--OPTIONAL--

6. Create a custom marker by defining new instance of `Icon` (see customIcon variable in the example) and add `icon` property to `Marker` component (*see code in Map.js component*)

7. Add custom tiles by updating `attribution` and `url` properties in `TileLayer` component (*see code in Map.js component*, and some tile options from [leaflet extras](https://leaflet-extras.github.io/leaflet-providers/preview/))
(and watch [The Billion Dollar Code](https://www.imdb.com/title/tt15392100/) to learn about tiles with some entertainment value)


