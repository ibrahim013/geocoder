import Location from '../models/Location';
import validateLocation from '../utilities/validateLocation';
import geocoder from '../services/geocoder';

const STATIC_LOCATION = 'Germany';

export default class LocationController {
  /**
   * @description create a location
   * @params {object} req
   * @params {object} res
   * @return {void}
   */
  static createLocation(req, res) {
    // validate body input
    const { isValid, errors } = validateLocation(req.body);
    if (!isValid) {
      return res.status(400).json({message: 'Bad Request'
      });
    }
    geocoder.geocode({ address: req.body.location, country: STATIC_LOCATION }, (err, location) => {
      if (err) {
        return res.status(500).json({
          status: 'fail',
          mesage: 'something went wrong'
        });
      }
      if (location && !location.length) {
        return res.status(404).json({
          status: 'fail',
          message: 'not found'
        });
      }
      if (location) {
        const newLocation = new Location({
          formattedAddress: location[0].formattedAddress,
          lat: location[0].latitude,
          lng: location[0].longitude
        });
        newLocation.save()
          .then(data => res.status(200).json(data))
          .catch(err => res.status(500).json({
            message: 'something went wrong'
          }));
      }
    });
  }

  /**
   * @description edit a location
   * @params {object} req
   * @params {object} res
   * @return {void}
   */
  static editLocation(req, res) {
    // validate body input
    const { isValid, errors } = validateLocation(req.body);
    if (!isValid) {
      return res.status(400).json({
        status: 'fail',
        errors
      });
    }
    geocoder.geocode({ address: req.body.location, country: STATIC_LOCATION }, (err, location) => {
      if (err) {
        return res.status(500).json(err);
      }
      const locationId = req.params.locationId.trim();
      if (!locationId) {
        return res.status(400).json({
          status: 'fail',
          message: 'location not found'
        });
      }
      Location.findOneAndUpdate({ _id: locationId }, {
          formattedAddress: location[0].formattedAddress,
          lat: location[0].latitude,
          lng: location[0].longitude
      }, { new: true })
        .then(location => res.status(200).json(location))
        .catch(err => res.status(500).json({
          message: 'something went wrong'
        }));
    });
  }

  /**
   * @description delete location
   * @params {object} req
   * @params {object} res
   * @return {void}
   */
  static deleteLocation(req, res) {
    const { locationId } = req.params;
    if (locationId) {
      Location.findOneAndDelete(locationId).then((deletedLocation) => {
        if (!deletedLocation) {
          return res.status(400).json({
            status: 'fail',
            message: 'location not found'
          });
        }
        if (deletedLocation) {
          return res.status(200).json(deletedLocation);
        }
      }).catch(err => res.status(500).json({
        message: 'somthing went wrong'
      }));
    }
  }

  /**
   * @description get all location
   * @params {object} req
   * @params {object} req
   * @return {void}
   */
  static getLocations(req, res) {
    Location.find().then((location) => {
      if (!location) {
        return res.status(400).json({
          status: 'fail',
          message: 'location not found'
        });
      }
      return res.status(200).json(location);
    }).catch(err => res.status(500).json({
      message: 'something went wrong'
    }));
  }
}
