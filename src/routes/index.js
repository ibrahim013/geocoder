import express from 'express';
import LocationController from '../controller/Location';

const router = express.Router();
const {
  createLocation,
  deleteLocation,
  getLocations,
  editLocation
} = LocationController;

router.post('/create-location', createLocation);
router.get('/locations', getLocations);
router.put('/edit-location/:locationId', editLocation);
router.delete('/delete-location/:locationId', deleteLocation);

export default router;
