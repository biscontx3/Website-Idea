document.addEventListener('DOMContentLoaded', function() {
    const dataRows = document.querySelectorAll('.data-row');
  
    function createTableContent() {
      const tableBody = document.getElementById('user-table-body');
      tableBody.innerHTML = '';
  
      const userrating = ['4/5', '3/5', '5/5'];
      const usernames = ['user1', 'user2', 'user3'];
      const userOffers = ['$$$', '$$', '$'];
  
      for (let i = 0; i < usernames.length; i++) {
        const row = document.createElement('tr');
  
        const userratingCell = document.createElement('td');
        userratingCell.classList.add('blue');
        userratingCell.textContent = userrating[i];

        const usernameCell = document.createElement('td');
        usernameCell.classList.add('blue');
        usernameCell.textContent = usernames[i];
  
        const offerCell = document.createElement('td');
        offerCell.classList.add('green');
        offerCell.textContent = userOffers[i];
  
        row.appendChild(userratingCell);
        row.appendChild(usernameCell);
        row.appendChild(offerCell);
  
        tableBody.appendChild(row);
      }
    }
  
    function clearTableContent() {
      const tableBody = document.getElementById('user-table-body');
      tableBody.innerHTML = '';
    }
  
    function toggleAdditionalTable() {
      const additionalTable = document.querySelector('.additional-table');
      additionalTable.classList.toggle('show');
    }
  
    function handleRowClick(event) {
      const selectedRow = event.target.closest('.data-row');
  
      if (selectedRow) {
        clearTableContent();
  
        if (selectedRow.classList.contains('active')) {
          selectedRow.classList.remove('active');
          toggleAdditionalTable();
        } else {
          const activeRow = document.querySelector('.data-row.active');
          if (activeRow) {
            activeRow.classList.remove('active');
          }
  
          selectedRow.classList.add('active');
          createTableContent();
          toggleAdditionalTable();
        }
      }
    }
  
    dataRows.forEach(function(row) {
      row.addEventListener('click', handleRowClick);
    });
  });
  window.onload = function() {
    var loginModal = document.getElementById('loginModal');
    var signupModal = document.getElementById('signupModal');
    var loginBtn = document.getElementById('loginBtn');
    var signUpBtn = document.getElementById('signUpBtn');

    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    signUpBtn.onclick = function() {
        signupModal.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == signupModal) {
            signupModal.style.display = "none";
        }
    }
}
let rows = document.querySelectorAll('.dashboard tr');
rows.forEach(row => {
    row.addEventListener('click', function() {
        if (this.classList.contains('selected')) {
            this.classList.remove('selected'); // If the row is already selected, deselect it
        } else {
            rows.forEach(r => r.classList.remove('selected')); // Remove the class from other rows
            this.classList.add('selected'); // Add the class to the clicked row
        }
    });
});
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault(); // this prevents the form from being submitted normally

  var newUsername = document.getElementById('newUsername').value;
  var newPassword = document.getElementById('newPassword').value;
  var email = document.getElementById('email').value;
  var zipcode = document.getElementById('zipcode').value;

  fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: newUsername, password: newPassword, email: email, zip: zipcode }),
  })
  .then(response => response.text())
  .then(data => {
    console.log('Success:', data);
    // Here you can handle a successful signup (e.g., navigate to another page, show a success message, etc.)
  })
  .catch((error) => {
    console.error('Error:', error);
    // Here you can handle errors
  });
});

