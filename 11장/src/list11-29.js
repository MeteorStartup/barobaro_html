data = 'global data';
function scope() {
    var data = 'local data'
    alert('Inside of Scope: ' + data);
}
scope();
alert('Outside of Scope: ' + data);
