const Paysera = require("paysera-nodejs");

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

function guidGenerator() {
  return 100000 + Math.floor(Math.random() * 900000);
}

exports.handler = async function (event, context) {
  const request = JSON.parse(event.body);

  const paysera = new Paysera({
    projectid: process.env.PAYSERA_PROJECT_ID,
    sign_password: process.env.PAYSERA_PASSWORD,
    accepturl: "https://tipsters.lt/mokejimas-pavyko",
    cancelurl: "https://tipsters.lt/mokejimas-nepavyko",
    callbackurl: "https://tipsters.lt/.netlify/functions/ok",
    test: 1,
  });

  const redirectUrl = paysera.buildRequestUrl({
    orderid: guidGenerator(),
    amount: Number(request.amount),
    currency: "EUR",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      redirectUrl,
    }),
    headers,
  };
};
