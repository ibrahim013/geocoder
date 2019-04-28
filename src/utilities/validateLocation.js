import Validator from 'validator';
import isEmpty from './is-empty';

const validateLocationInput = (data) => {
  const errors = {};

  data.location = !isEmpty(data.location) ? data.location : '';

  if (Validator.isEmpty(data.location)) {
    errors.location = 'location can not be empty';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
export default validateLocationInput;
