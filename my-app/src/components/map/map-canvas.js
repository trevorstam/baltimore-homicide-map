import React from "react";
import EsriLoader from "esri-loader-react";

import "../../styles/map.css";

class Canvas extends React.Component {
  render() {
    const options = {
      url: "https://js.arcgis.com/4.10/"
    };

    return ( 
      <div>
      <
      EsriLoader options = {
        options
      }
      modulesToLoad = {
        [
          "esri/Map",
          "esri/views/MapView",
          "esri/layers/FeatureLayer",
          "esri/widgets/Legend"
        ]
      }
      onReady = {
        ({
          loadedModules: [Map, MapView, FeatureLayer, Legend],
          containerNode
        }) => {
          const webMap = new Map({
            basemap: "dark-gray"
          });
          const mapView = new MapView({
            container: containerNode,
            map: webMap,
            center: [-76.630754, 39.285088],
            zoom: 12
          });

          const template = {
            title: "Statistical Summary",
            content: [{
              type: "fields",
              fieldInfos: [{
                  fieldName: "SOURCE_ID",
                  label: "Source ID",
                  visible: true
                },
                {
                  fieldName: "Join_Count",
                  label: "No. of Homicides",
                  visible: true
                },
                {
                  fieldName: "Gi_Text",
                  label: "Statistical Significance",
                  visible: true
                }
              ]
            }]
          };

          const layer = new FeatureLayer({
            url: "https://services1.arcgis.com/RCT9RCgW4FY2e7Dk/arcgis/rest/services/Hot%20Spots%20BaltimoreHomicides/FeatureServer",
            outFields: ["SOURCE_ID", "Join_Count", "Gi_Text"],
            popupTemplate: template
          });
          mapView.map.add(layer);

          const legend = new Legend({
            view: mapView,
            layerInfos: [{
              layer: layer,
              title: "Homicide Hot Spots Significance:"
            }]
          });
          mapView.ui.add(legend, "bottom-right");
        }
      }
      /> 
      </div>
    );
  }
}

export default Canvas;
