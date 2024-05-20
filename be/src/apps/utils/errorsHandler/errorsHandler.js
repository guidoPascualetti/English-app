/**
 * constructor - A description of the entire function.
 *
 * @param {type} message - description of parameter
 * @param {type} statusCode - description of parameter
 * @return {type} undefined
 */
class ClientError extends Error {
  constructor(message = "algo salio mal", statusCode = 400) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export { ClientError };
