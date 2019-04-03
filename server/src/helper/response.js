
const returnResponse = (res, statusCode, message, responseData, sort) => res.status(statusCode)
  .json({
    ...message,
    data: responseData,
    min: sort === 'descr'
      ? responseData[responseData.length - 1]
      : responseData[0],
    max: sort === 'descr'
      ? responseData[0]
      : responseData[responseData.length - 1],
  });

export default returnResponse;
