const { DateTime } = require("luxon");

function now() {
  return DateTime.local().toISO();
}

module.exports = now;
