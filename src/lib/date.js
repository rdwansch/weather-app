const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const getFullDate = (date, format) => {
  const now = new Date(date);

  const _date = now.getDate() > 10 || '0' + now.getDate();
  const _month = months[now.getMonth()];

  if (format == 'API') {
    return `${now.getFullYear()}-${now.getMonth() + 1 > 10 || '0' + (now.getMonth() + 1)}-${_date}`;
  }

  return `${_date} ${_month} ${now.getFullYear()}`;
};
