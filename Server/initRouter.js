function initRouter(server, client) {
  server.get('', (req, res) => {
    res.json({
      status: client.status,
      uptime: client.uptime,
      servers: client.guilds.array().length
    });
  });

  server.post('/webhooks/:channel', (req, res) => {
    console.log('Webhook!');
    console.log({
      channel: req.params.channel,
      json: req.body
    });
  });
}

module.exports = initRouter;
