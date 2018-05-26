exports.date = (time: Date, format) => {
  if (time) {
    return time.format(format);
  } else {
    return "未知的时间";
  }
};
