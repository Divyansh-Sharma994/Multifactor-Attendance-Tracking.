// Add functionality to the Sign In form
document.querySelector('.input-container').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Retrieve username and password input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Replace with your authentication logic
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
      // Redirect or perform other actions upon successful login
    } else {
      alert('Invalid username or password. Please try again.');
      // Optionally, clear input fields on incorrect login attempt
      // document.getElementById('username').value = '';
      // document.getElementById('password').value = '';
    }
  });
  

  // Disable zooming function
function disableZoom() {
    document.addEventListener('wheel', preventZoom);
    document.addEventListener('keydown', preventZoom);
  }
  
  // Function to prevent zooming
  function preventZoom(event) {
    if (event.ctrlKey === true && (event.key === '+' || event.key === '-' || event.key === '0')) {
      event.preventDefault();
    }
  }
  
  // Call disableZoom function on page load
  window.addEventListener('load', disableZoom);
  