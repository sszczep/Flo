function handleError(error, req, next) {
  req.message.reply(error.message);

  console.error(error);

  next(error);
}

module.exports = handleError;
