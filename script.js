document.getElementById('admin-box').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    
    // This is the Admin Alert
    alert("DATA CAPTURED!\nUser: " + username + "\nPass: " + password);
});
