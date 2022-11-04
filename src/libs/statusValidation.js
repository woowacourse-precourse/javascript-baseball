const RESTART = "1";
const GAMEOFF = "2";

const statusValidation = ({ status, num }) => {
  if (status === "pitch" && num.length !== 3) throw new Error();
  if (status === "restart" && !(num === RESTART || num === GAMEOFF))
    throw new Error();
  if (status === "restart" && num === RESTART) return true;
  return false;
};

module.exports = statusValidation;
