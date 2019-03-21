function diffToText(diff) {
  return diff.map(change => {
    let { value } = change;

    // Precede all + - ! with zero width space
    // (you won't see it in editor, but trust me - it's there)
    value = value.replace(/\+/g, '​+');
    value = value.replace(/-/g, '​-');
    value = value.replace(/!/g, '​!');

    // Trim first and last newline character
    if(value.charAt(0) === '\n') value = value.slice(1);
    if(value.charAt(value.length - 1) === '\n') value = value.slice(0, -1);

    // Add +/- character to every line
    return value
      .split('\n')
      .map(line => {
        if(change.added) return `+ ${line}`;
        if(change.removed) return `- ${line}`;

        return line;
      })
      .join('\n');
  }).join('\n');
}

module.exports = diffToText;
