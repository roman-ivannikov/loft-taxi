import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

export class MapPage extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZG82cGJpdTE5NzciLCJhIjoiY2wzaDJ5Y3BzMTd0NjNkcDhnYXN3Ym53NSJ9.ozHztLTRBjeidBPG3vrjXg';

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      center: [90.50008026687789, 56.2666187056609],
      zoom: 15,
      style: 'mapbox://styles/mapbox/streets-v11',
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="map-wrapper">
        <div data-testid="map" className="map" ref={this.mapContainer}/>
      </div>
  )}
}