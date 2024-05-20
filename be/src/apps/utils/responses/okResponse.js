import { response } from "express";

/**
 * Sends an OK response with the specified status code and data.
 *
 * @param {Object} res - The response object
 * @param {number} statusCode - The status code for the response
 * @param {any} data - The data to be included in the response
 * @return {void}
 */

function okResponse(res, statusCode, data) {
  res.status(statusCode).json({
    error: false,
    data: data,
  });
}

export default okResponse;
