const convertToRemErrorMessage = 'please provide a number';

const convertToRem = value => {
  if (typeof value !== 'number') {
    return convertToRemErrorMessage;
  }

  return `${value / 16}rem`;
};

export { convertToRemErrorMessage };

export default convertToRem;
