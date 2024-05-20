function getDate() {
  const currentDate = new Date();
  return `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
}
function getParams(req) {
  return "params";
}

export default function initialLog(req) {
  return `[ ${getDate()} ] - ${req.method} | ${req.url} | IP: ${
    req.ip
  } | Params: ${getParams(req)}`;
}
