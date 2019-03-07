module.exports = client => {
  // When bot successfully logged in
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
};
