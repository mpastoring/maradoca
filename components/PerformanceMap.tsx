import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

type Performance = {
  date: string;
  venue: string;
  location: string;
  isPast: boolean;
};

type PerformanceMapProps = {
  performances: Performance[];
};

const icon = L.icon({
  iconUrl: '/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function PerformanceMap({ performances }: PerformanceMapProps) {
  return (
    <MapContainer center={[51.3397, 12.3731]} zoom={5} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {performances.map((performance, index) => (
        <Marker
          key={index}
          position={[51.3397, 12.3731]} // You'll need to replace this with actual coordinates
          icon={icon}
        >
          <Popup>
            <strong>{new Date(performance.date).toLocaleDateString('de-DE')}</strong>
            <br />
            {performance.venue}, {performance.location}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}