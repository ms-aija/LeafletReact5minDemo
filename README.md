## Setting up a basic leaflets.js map in React
### View Project
This demo project has been built with Create-React-App environment.

Check it out on [CodeSandbox](https://codesandbox.io/s/github/ms-aija/LeafletReact5minDemo).

Or view it in your browser:
* Fork and clone the repo
* Run `npm install` from project root directory
* Run `npm start` from project root directory

![screenshot](./public/app-screenshot.png)

### Leaflet Setup
To create a leaflet map in your own project:
1. Install leaflet and react-leaflet with `npm install react-leaflet leaflet`.

2. Import core components with `import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'` and `import { Icon } from 'leaflet'` (*see code in [Map.js](https://github.com/ms-aija/LeafletReact5minDemo/blob/master/src/components/Map.js#L2) component*).

3. Add leaflet stylesheet to the component with `import 'leaflet/dist/leaflet.css'` (*see code in [Map.js](https://github.com/ms-aija/LeafletReact5minDemo/blob/master/src/components/Map.js#L4) component and [leaflet.js docs](https://leafletjs.com/examples/quick-start/)*).

4. Add `.leaflet-container` class to css with map dimensions (other properties are optional). Note that the class **does not** have to be added anywhere in the Map component itself (*see code in [index.css](https://github.com/ms-aija/LeafletReact5minDemo/blob/master/src/index.css#L47)*).

```css
.leaflet-container {
  width: 350px;
  height: 350px;
}
```

5. Add a `MapContainer` component (*see code in [Map.js](https://github.com/ms-aija/LeafletReact5minDemo/blob/master/src/components/Map.js#L22) component and [react leaflet docs](https://react-leaflet.js.org/)*).

```jsx
 <div className="map">
  <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        🐻🍻🎉
      </Popup>
    </Marker>
  </MapContainer>
</div>
```

Note, I have defined the [position](https://github.com/ms-aija/LeafletReact5minDemo/blob/master/src/components/Map.js#L9) as a variable inside the Map component but outside the `return` statement.

```css
const position = [52.51, 13.38]
```

#### Optional

6. Create a custom marker by defining a new instance of `Icon` outside the `return` statement. Note, there are additional properties that can be defined for the icon (*see code in [Map.js](https://github.com/ms-aija/LeafletReact5minDemo/blob/master/src/components/Map.js#L12) component*)

```js
const customIcon = new Icon({
    iconUrl: "/icons8-select-24.png",
    iconSize: [20, 20]
  })
```
and add `icon` property to `Marker` component (*see code in [Map.js](https://github.com/ms-aija/LeafletReact5minDemo/blob/master/src/components/Map.js#L34) component*).

```jsx
<Marker position={position} icon={customIcon}>
```



7. Add custom tiles by updating `attribution` and `url` properties in `TileLayer` component (*see code in [Map.js](https://github.com/ms-aija/LeafletReact5minDemo/blob/master/src/components/Map.js#L28) component*).
* You can find some tile options from [leaflet extras](https://leaflet-extras.github.io/leaflet-providers/preview/). To update your project with one of the options simply copy attribution and url. For example, to include the Stadia.AlidadeSmoothDark map:

```jsx
 <TileLayer
  attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
/>
```
---
*And watch [The Billion Dollar Code](https://www.imdb.com/title/tt15392100/) to learn about tiles with some entertainment value* 😉🙃
