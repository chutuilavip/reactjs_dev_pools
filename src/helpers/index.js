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
export {
    currentTimeInMilliseconds,
    currentTimeInSeconds,
    formatTime,
    formatToUTCTime,
    reduceAddress,
};