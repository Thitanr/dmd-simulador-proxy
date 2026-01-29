exports.handler = async function () {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Simulador DMD</title>
        </head>
        <body>
          <iframe 
            src="/index.html"
            style="width:100%;height:100vh;border:0;"
          ></iframe>
        </body>
      </html>
    `
  };
};
