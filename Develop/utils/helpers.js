module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_time: (date) => {
    // Format time as HH:MM
    return date.toLocaleTimeString();
  }
};  