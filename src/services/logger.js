const logger = (stack, level, packageName, message) => {
  console.log({
    stack,
    level,
    package: packageName,
    message,
  });
};

export default logger;