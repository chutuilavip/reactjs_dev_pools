import moment from "moment";

const currentTimeInSeconds = () => moment().unix();

const currentTimeInMilliseconds = () => currentTimeInSeconds() * 1000;

const formatTime = (time, formatString) => moment(time).format(formatString);
const formatToUTCTime = (time, formatString) =>
  moment.utc(time).format(formatString);
const reduceAddress = (address) => {
  if (!address) {
    return "";
  }
  return (
    address.substring(0, 4) + "..." + address.substring(address.length - 4)
  );
};
export const getDefaultAvatarName = (first_name, last_name) => {
  if (first_name && last_name) {
    return first_name[0] + last_name[0];
  }
};
export {
  currentTimeInMilliseconds,
  currentTimeInSeconds,
  formatTime,
  formatToUTCTime,
  reduceAddress,
};
