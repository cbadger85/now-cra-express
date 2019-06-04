const app = require('../../utils/app');

app.get('*', (req, res) => {
  const date = new Date().toString();

  res.json(date);
});

module.exports = app;
