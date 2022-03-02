function welcome() {
    var clientName = document.getElementById('txt').value;
    localStorage.setItem('textvalue', clientName);
    return false;
}