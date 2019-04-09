window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);

  const auth = urlParams.get('auth');

  // If user successfully added app to workplace
  if(auth === 'success') {
    const workplace = urlParams.get('workplace');

    M.toast({
      html: `<span>Successfully added <b>Flo</b> to <br><b>${workplace}</b> workplace!</span>`,
      classes: 'green lighten-1'
    });
  } else if(auth === 'failed') {
    const message = urlParams.get('message');

    M.toast({
      html: `<span>Couldn't add <b>Flo</b> to your workplace, <br>reason: ${message}</span>`,
      classes: 'red darken-2'
    });
  }
};
