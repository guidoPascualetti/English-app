/**
 * Wraps an asynchronous function to catch any errors and pass them to the next middleware.
 *
 * @param {function} fn - The asynchronous function to be executed.
 * @return {function} A function that handles errors and passes them to the next middleware.
 */
function catchedAsync(fn) {
  return function (req, res, next) {
    fn(req, res).catch(function (e) {
      next(e);
    });
  };
}
export default catchedAsync;
