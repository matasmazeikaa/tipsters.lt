const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

export const handler = function () {
  return {
    statusCode: 200,
    body: "OK",
    headers,
  };
};
