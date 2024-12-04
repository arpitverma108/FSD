function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (name === "") {
      alert("Name is required.");
      return false;
    }
  
    if (email === "") {
      alert("Email is required.");
      return false;
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return false;
    }
  
    if (password === "") {
      alert("Password is required.");
      return false;
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return false;
    }
  
    // If all validations pass
    alert("Form submitted successfully!");
    return true;
  }
  
  // Email validation helper function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  