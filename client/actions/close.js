module.exports = ({ payload }) => {
  return {
    response_type: 'ephemeral',
    text: '',
    replace_original: true,
    delete_original: true
  }
}