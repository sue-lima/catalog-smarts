import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import mapMarkerImg from '../../assets/map-marker.png';
import L from 'leaflet';
import api from '../../services/api'
import TopHeader from '../../components/TopHeader'

import './styles.css';

const pinMapIcon = L.icon({
  iconUrl: mapMarkerImg,
  iconSize: [68, 68],
  iconAnchor: [29, 68],
})

function Custumer() {
  const params = useParams();
  const [customer, setCustomer] = useState();
  const [actveImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        api.get(`customers/${params.id}`).then(response => {
            setCustomer(response.data);
        });
    }, [params.id]);

    if (!customer) {
      return <p>Loading...</p>;
    }

  return (
    <div id="page-customer">
      <TopHeader title="Detalhes do cliente"/>
      <main>
        <div className="customer-details">
          <img src={customer.pictures[0].url} alt="Customer"/>

          <div className="images">
            {customer.pictures.map((image,index) => {
              return (
                <button
                  key= {image.id} 
                  className={actveImageIndex === index ? 'active' : ''} 
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.url} alt="Imagens"/>
                </button>
              );
            })}
          </div>
          
          <div className="customer-details-content">
            <h1>{customer.name.first} {customer.name.last}</h1>
            <p><b>Idade:</b> {customer.age} anos</p>
            <p><b>Data de registro: </b>{customer.registered}</p>
            <p><b>Budget: </b>{customer.budget}</p>
            <p><b>Empresa: </b>{customer.company}</p>
            <p><b>E-mail: </b>{customer.email}</p>
            <p><b>Telefone: </b>{customer.phone}</p>
            <p><b>Endereço: </b>{customer.address}</p>
            <p><b>Sobre:</b><br/>{customer.about}</p>

            <div className="map-container">
              <MapContainer
                center={[customer.latitude,customer.longitude]} 
                zoom={8} 
                style={{ width: '100%', height: 380 }}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={pinMapIcon} position={[customer.latitude,customer.longitude]} />
              </MapContainer>
            </div>

            <hr />

            <div className="timeline-details">
              <h2>Timeline dos Contatos</h2>
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Broker</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    customer.contactTimeline.map(data => (
                    <tr>
                      <td>{data.id}</td>
                      <td>{data.broker}</td>
                      <td>{data.date}</td>
                    </tr>))
                  }  
                </tbody>
              </table>        
            </div>

            <hr />

            <div className="channel-details">
              <h2>Canal</h2>
              <p>{customer.channel}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
  
export default Custumer;