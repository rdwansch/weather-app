const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const days = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getFullDate = (date, format) => {
  const now = new Date(date);

  const _date = now.getDate() > 10 ? now.getDate() : '0' + now.getDate();
  const _month = months[now.getMonth()];

  if (format == 'API') {
    return `${now.getFullYear()}-${now.getMonth() + 1 > 10 || '0' + (now.getMonth() + 1)}-${_date}`;
  } else if (format == 'full') {
    return `${days[now.getDay()]}, ${_date} ${_month} ${now.getFullYear()}`;
  }

  return `${_date} ${_month} ${now.getFullYear()}`;
};
