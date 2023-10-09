import React from "react";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { Map, Marker, Popup } from "react-map-gl";
import Navbar from "../navbar";
import {
  Box,
  TextField,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Button,
  Typography,
} from "@mui/material";
import { MapProvider } from 'react-map-gl'
import "mapbox-gl/dist/mapbox-gl.css";
// import pollutant from "pollutant.js";
// import { getZarr } from "utils/getZarr.js";
// import { slice } from "zarr";
import useMediaQuery from "@mui/material/useMediaQuery";
// import { hexToRgba } from "utils/legend.js";
// import { colors } from "utils/colors.js";
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { DeckRenderer } from "deck.gl";
import ProgressStepper from "components/ProgressBar";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoic2hhd25yYW4xODIiLCJhIjoiY2w5NXRvMDRjMmhhYzN3dDUyOGo0ZmdpeCJ9.RuSR6FInH2tUyctzdnilrw";

const INITIAL_VIEW_STATE = {
  latitude: 40.0,
  longitude: -110.0,
  zoom: 3.5,
  bearing: 0,
	// pitch: 0,
};

const MOBILE_INITIAL_VIEW_STATE = {
  latitude: 40.0,
  longitude: -98.0,
  zoom: 1,
  bearing: 0,
};

const MAP_STYLE = "mapbox://styles/mapbox/streets-v10";

const Basemap = () => {
  return(
    <Box>
      {/* <ReactNotifications /> */}
        <Box>
          <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            MapProvider
          >
            <Map
              mapStyle={MAP_STYLE}
              mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
            >
            </Map>
          </DeckGL>
          <Navbar/>
          <Box
            sx={{
              left: "3%",
              top: "100px",
              width: "90%",
              height: "550px",
              position: "absolute",
            }}
          >
            <ProgressStepper />
          </Box>
        </Box>
    </Box>
  );
};

export default Basemap;