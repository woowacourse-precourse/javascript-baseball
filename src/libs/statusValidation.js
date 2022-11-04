const statusValidation = ({ status, num }) => {
  console.log(num);
  if (status === "pitch" && num.length !== 3) throw new Error();
  if (status === "restart" && !(num === "1" || num === "2")) throw new Error();
  if (status === "restart" && num === "2") return true;
  return false;
};

module.exports = statusValidation;
