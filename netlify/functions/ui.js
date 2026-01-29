exports.handler = async (event) => {
  // Responder igual a GET y POST (Bitrix suele entrar por POST)
  const html = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Simulador DMD</title>
  <style>
    html,body{height:100%;margin:0}
    iframe{border:0;width:100%;height:100%}
  </style>
</head>
<body>
  <iframe
    src="https://thitanr.github.io/dmd-simulador/index.html"
    allow="clipboard-read; clipboard-write"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</body>
</html>`;

  return {
    statusCode: 200,
    headers: {
      "content-type": "text/html; charset=utf-8",
      // Bitrix carga dentro de tu dominio crm..., no hace falta CORS para iframe,
      // pero esto evita bloqueos tontos en algunas rutas:
      "cache-control": "no-store",
    },
    body: html,
  };
};
