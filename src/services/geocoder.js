import Geocoder from 'node-geocoder';
import dotenv from 'dotenv';
import { GEOCODER_API_KEY } from '../../config';


dotenv.config();

const options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: GEOCODER_API_KEY.geolocation,
  formatter: null
};

const geocoder = Geocoder(options);

export default geocoder;
