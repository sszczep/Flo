module.exports = {
  async handler({ message, arg }) {
    console.log('Message', message.content);
    console.log('Argument', arg);
    await message.channel.send('hello there!');
  }
};
