import { CURRENCY } from './constants';

export const capitalizeFirstLetter = (string) => {
  if (!string) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const firstLetterUppercase = (string) => {
  if (string) {
    const spaced = string.split(' ');
    return spaced
      .map((word) => word.toLowerCase().replace(/^\w/, (c) => c.toUpperCase()))
      .join(' ');
  }

  return '';
};

export const isArrayEmpty = (arr) => !arr || arr.length === 0;

export const isObjectEmpty = (obj) => {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return true;
};

const getNetworkErrors = (error) =>
  error.networkError.response
    .json()
    .then((e) => e.errors.map((err) => err.message).join(','));

export const handleErrorMessage = async (e) => {
  if (!e) {
    return '';
  }

  if (e.networkError) {
    const response = await getNetworkErrors(e);
    return response;
  }

  if (e.graphQLErrors) {
    return e.graphQLErrors[0].message;
  }

  return 'There seems to be a problem';
};

export const formatNumberWithComa = (value) => {
  if (!value) {
    return;
  }
  const arr = `${value}`.split('.');
  const formatted = `${arr[0]}`.replace(
    /\d{1,3}(?=(\d{3})+$)/g,
    (s) => `${s},`
  );

  if (arr[1]) {
    return `${formatted}.${arr[1]}`;
  }

  return formatted;
};

export const formatPrice = (price, currency) => {
  if (!price) {
    return '';
  }

  if (Object.keys(CURRENCY).includes(currency)) {
    return `${CURRENCY[currency]}${formatNumberWithComa(price)}.00`;
  }

  return `${currency}${price}`;
};

export const transformArray = (arr) => {
  if (isArrayEmpty(arr)) {
    return [];
  }

  return arr.map((item) => {
    return {
      label: item,
      value: item
    };
  });
};

export const updateObject = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties
});

export const getAggregate = (arr, property) => {
  return arr.reduce((acc, obj) => acc + obj[property], 0);
};
