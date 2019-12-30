//ajout eventlistener sur input --> à chaque entrée au clavier
document.getElementById("code").addEventListener('input', function(e) {
  var value = e.target.value;
//teste que l'input commence par CODE- ???
  if (/^CODE-/.test(value)) {
    document.getElementById('code-validation').innerHTML = "Code valide";
    //suppression de l'attribut disabled (utilisé dans taquin full stack)
    document.getElementById('submit-btn').removeAttribute('disabled');
  } else {
    document.getElementById('code-validation').innerHTML = "Code invalide";
    //création de l'attribut disabled (utilisé dans taquin full stack)
    document.getElementById('submit-btn').setAttribute('disabled', true);
  }
});
