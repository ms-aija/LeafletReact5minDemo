// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Icon } from 'leaflet';


export function Map() {

  // const customIcon = new Icon({
  //   iconUrl: '/icons8-select-24.png',
  //   iconSize: [33, 33],
  //   // iconAnchor: [1, 1],
  //   // popupAnchor: [-0, -76]
  // })

  // Berlin coordinates
  // const position = [52.51, 13.38]

  return (
    <section className='map-component' >
      <div className='map' id='map' >
        <p>Show me a map here</p>

      {/* --- Leaflet map */}
      {/* <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // --- Alternative map style
          // attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          // url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
        />
        <Marker position={position}
          // icon={customIcon}
        >
          <Popup>
            🐻🍻🎉
          </Popup>
        </Marker>
      </MapContainer> */}
      </div>
    </section>
  )
}