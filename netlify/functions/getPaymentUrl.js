import Paysera from "paysera-nodejs";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
};

function guidGenerator() {
  return 100000 + Math.floor(Math.random() * 900000);
}

export const handler = async function (event) {
  try {
    const request = JSON.parse(event.body);

    if (!process.env.PAYSERA_PROJECT_ID || !process.env.PAYSERA_PASSWORD) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Paysera credentials are not configured" }),
        headers,
      };
    }

    const paysera = new Paysera({
      projectid: process.env.PAYSERA_PROJECT_ID,
      sign_password: process.env.PAYSERA_PASSWORD,
      accepturl: "https://tipsters.lt/mokejimas-pavyko",
      cancelurl: "https://tipsters.lt/mokejimas-nepavyko",
      callbackurl: "https://tipsters.lt/.netlify/functions/ok",
      test: 0,
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
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      headers,
    };
  }
};
