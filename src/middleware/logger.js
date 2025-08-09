const logger = (req, res, next) => {
  console.log(
    `${req.hostname} || method ${
      req.method
    } and time ${new Date().toLocaleTimeString()}`
  );
  next();
};

const userChecker = (req, res, next) => {
  console.log('users Checker middleware work smoothly ')
  next()
};

module.exports = {logger,userChecker};
