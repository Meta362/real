// Admin Password
const ADMIN_PASSWORD = "@3625";

// Submit a Wish
function submitWish() {
  const username = document.getElementById('username').value;
  const wish = document.getElementById('wish').value;

  if (username === "" || wish === "") {
    // alert("Please fill in all fields!");
    return;
  }

  let wishes = JSON.parse(localStorage.getItem('wishes')) || [];
  wishes.push({ name: username, message: wish });
  localStorage.setItem('wishes', JSON.stringify(wishes));

//   alert("Wish submitted successfully!");
  document.getElementById('username').value = "";
  document.getElementById('wish').value = "";
}

// View All Wishes (Admin Only)
function viewWishes() {
  const password = document.getElementById('admin-password').value;

  if (password !== ADMIN_PASSWORD) {
    // alert("Incorrect Password!");
    return;
  }

  const wishListDiv = document.getElementById('wish-list');
  const wishesUl = document.getElementById('wishes');
  let wishes = JSON.parse(localStorage.getItem('wishes')) || [];

  wishesUl.innerHTML = "";

  wishes.forEach(wish => {
    const li = document.createElement('li');
    li.textContent = `${wish.name}: ${wish.message}`;
    wishesUl.appendChild(li);
  });

  wishListDiv.style.display = "block";
}

// Clear All Wishes (Admin Only)
function clearWishes() {
  const password = document.getElementById('admin-password').value;

  if (password !== ADMIN_PASSWORD) {
    alert("Incorrect Password!");
    return;
  }

  // Clear the localStorage data
  localStorage.removeItem('wishes');

  // Clear the displayed list
  const wishesUl = document.getElementById('wishes');
  wishesUl.innerHTML = "";

  // Hide the wish list section
  const wishListDiv = document.getElementById('wish-list');
  wishListDiv.style.display = "none";

//   alert("All wishes have been cleared!");
}