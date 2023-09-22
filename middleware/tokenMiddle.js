module.exports = function (req, res, next) {
  const token = req.app.locals.access_token;
  console.log("TOKEN MIDDLE ", token);
  if (!token) {
    return res.json({
      error: "No valid auth token found 😖",
    });
  }
  req.token = token;
  next();
};
