// script.js

const indianCities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 
    'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 
    'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 
    'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar', 
    'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad', 
    'Howrah', 'Ranchi', 'Gwalior', 'Jabalpur', 'Coimbatore', 'Vijayawada', 'Jodhpur', 
    'Madurai', 'Raipur', 'Kota', 'Guwahati', 'Chandigarh', 'Solapur', 'Hubli-Dharwad', 
    'Mysore', 'Tiruchirappalli', 'Bareilly', 'Aligarh', 'Tiruppur', 'Gurgaon', 'Moradabad', 
    'Jalandhar', 'Bhubaneswar', 'Salem', 'Warangal', 'Mira-Bhayandar', 'Jalgaon', 'Guntur', 
    'Thiruvananthapuram', 'Bhiwandi', 'Saharanpur', 'Gorakhpur', 'Bikaner', 'Amravati', 
    'Noida', 'Jamshedpur', 'Bhilai', 'Cuttack', 'Firozabad', 'Kochi', 'Nellore', 'Bhavnagar', 
    'Dehradun', 'Durgapur', 'Asansol', 'Rourkela', 'Nanded', 'Kolhapur', 'Ajmer', 'Akola', 
    'Gulbarga', 'Jamnagar', 'Ujjain', 'Loni', 'Siliguri', 'Jhansi', 'Ulhasnagar', 'Jammu', 
    'Sangli-Miraj & Kupwad', 'Mangalore', 'Erode', 'Belgaum', 'Ambattur', 'Tirunelveli', 
    'Malegaon', 'Gaya', 'Udaipur', 'Kakinada', 'Davanagere', 'Kozhikode', 'Maheshtala', 
    'Rajpur Sonarpur', 'Rajahmundry', 'Bokaro', 'South Dumdum', 'Bellary', 'Patiala', 
    'Gopalpur', 'Agartala', 'Bhagalpur', 'Muzaffarnagar', 'Bhatpara', 'Panihati', 'Latur', 
    'Dhule', 'Tirupati', 'Rohtak', 'Korba', 'Bhilwara', 'Berhampur', 'Muzaffarpur', 
    'Ahmednagar', 'Mathura', 'Kollam', 'Avadi', 'Kadapa', 'Kamarhati', 'Sambalpur', 
    'Bilaspur', 'Shahjahanpur', 'Satara', 'Bijapur', 'Kurnool', 'Rampur', 'Shimoga', 
    'Chandrapur', 'Junagadh', 'Thrissur', 'Alwar', 'Bardhaman', 'Kulti', 'Nizamabad', 
    'Parbhani', 'Tumkur', 'Khammam', 'Ozhukarai', 'Bihar Sharif', 'Panipat', 'Darbhanga', 
    'Bally', 'Aizawl', 'Dewas', 'Ichalkaranji', 'Karnal', 'Bathinda', 'Jalna', 'Eluru', 
    'Kirari Suleman Nagar', 'Barasat', 'Purnia', 'Satna', 'Mau', 'Sonipat', 'Farrukhabad', 
    'Sagar', 'Rourkela', 'Durg', 'Imphal', 'Ratlam', 'Hapur', 'Arrah', 'Karimnagar', 
    'Anantapur', 'Etawah', 'Ambernath', 'North Dumdum', 'Bharatpur', 'Begusarai', 'New Delhi', 
    'Gandhidham', 'Baranagar', 'Tiruvottiyur', 'Pondicherry', 'Sikar', 'Thoothukudi', 'Rewa', 
    'Mirzapur', 'Raichur', 'Pali', 'Ramagundam', 'Haridwar', 'Vijayanagaram', 'Katihar', 
    'Nagercoil', 'Sri Ganganagar', 'Karawal Nagar', 'Mango', 'Thanjavur', 'Bulandshahr', 
    'Uluberia', 'Murwara', 'Sambhal', 'Singrauli', 'Nadiad', 'Secunderabad', 'Naihati', 
    'Yamunanagar', 'Bidhan Nagar', 'Pallavaram', 'Bidar', 'Munger', 'Panchkula', 'Burhanpur', 
    'Raurkela Industrial Township', 'Kharagpur', 'Dindigul', 'Gandhinagar', 'Hospet', 
    'Nangloi Jat', 'Malda', 'Ongole', 'Deoghar', 'Chapra', 'Haldia', 'Khandwa', 'Nandyal', 
    'Chittoor', 'Morena', 'Amroha', 'Anand', 'Bhind', 'Bhalswa Jahangir Pur', 'Madhyamgram', 
    'Bhiwani', 'Navi Mumbai Panvel Raigad', 'Baharampur', 'Ambala', 'Morvi', 'Fatehpur', 
    'Rae Bareli', 'Khora', 'Bhusawal', 'Orai', 'Bahraich', 'Vellore', 'Mahesana', 'Sambalpur', 
    'Raiganj', 'Sirsa', 'Danapur', 'Serampore', 'Sultan Pur Majra', 'Guna', 'Jaunpur', 
    'Panvel', 'Shivpuri', 'Surendranagar Dudhrej', 'Unnao', 'Hugli and Chinsurah', 'Alappuzha', 
    'Kottayam', 'Shimla', 'Karaikudi'
];

// Auth & Storage Logic
const USERS_KEY = 'luxe_users';
const CURRENT_USER_KEY = 'luxe_current_user';

function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
}

function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
}

function setCurrentUser(user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    updateNavAuth();
}

function logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
    updateNavAuth();
    window.location.reload();
}

function updateNavAuth() {
    const user = getCurrentUser();
    const authButtons = document.getElementById('auth-buttons');
    const userProfile = document.getElementById('user-profile');
    const usernameDisplay = document.getElementById('username-display');

    if (user) {
        if (authButtons) authButtons.classList.add('hidden');
        if (userProfile) {
            userProfile.classList.remove('hidden');
            userProfile.classList.add('flex');
            usernameDisplay.textContent = `Hi, ${user.username}`;
        }
    } else {
        if (authButtons) authButtons.classList.remove('hidden');
        if (userProfile) {
            userProfile.classList.add('hidden');
            userProfile.classList.remove('flex');
        }
    }
}

// Modal Logic
function openAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.classList.remove('hidden');
    // Force reflow
    void modal.offsetWidth;
    modal.classList.add('active');
    toggleAuth('login');
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function toggleAuth(mode) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const regUsername = document.getElementById('reg-username');
    const loginUsername = document.getElementById('login-username');

    if (mode === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        
        // Update tabs
        tabLogin.classList.add('text-secondary', 'border-b-2', 'border-secondary');
        tabLogin.classList.remove('text-gray-400');
        tabRegister.classList.remove('text-secondary', 'border-b-2', 'border-secondary');
        tabRegister.classList.add('text-gray-400');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');

        // Update tabs
        tabRegister.classList.add('text-secondary', 'border-b-2', 'border-secondary');
        tabRegister.classList.remove('text-gray-400');
        tabLogin.classList.remove('text-secondary', 'border-b-2', 'border-secondary');
        tabLogin.classList.add('text-gray-400');

        // Pre-fill username if switching from failed login
        if (loginUsername && loginUsername.value) {
            regUsername.value = loginUsername.value;
        }
    }
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        setCurrentUser(user);
        closeAuthModal();
        alert('Login Successful!');
    } else {
        // Smart Redirect: User not found, switch to register
        const userExists = users.find(u => u.username === username);
        if (!userExists) {
            alert('User not found. Redirecting to registration...');
            toggleAuth('register');
        } else {
            alert('Invalid password. Please try again.');
        }
    }
}

function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    const users = getUsers();
    if (users.find(u => u.username === username)) {
        alert('Username already exists. Please login.');
        toggleAuth('login');
        return;
    }

    const newUser = { username, email, password };
    saveUser(newUser);
    setCurrentUser(newUser);
    closeAuthModal();
    alert('Registration Successful! You are now logged in.');
}

// Booking Logic
function bookRoom(roomName, price) {
    const user = getCurrentUser();
    if (!user) {
        alert('Please login to book a room.');
        openAuthModal();
        return;
    }

    // Open Receipt Modal
    const modal = document.getElementById('receipt-modal');
    const checkIn = document.getElementById('check-in').value || new Date().toISOString().split('T')[0];
    
    // Calculate Check-out (default +1 day if not set)
    let checkOutDate = new Date(checkIn);
    checkOutDate.setDate(checkOutDate.getDate() + 1);
    const checkOut = document.getElementById('check-out').value || checkOutDate.toISOString().split('T')[0];

    // Calculate nights
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    
    if (nights <= 0) {
        alert('Invalid dates selected.');
        return;
    }

    const priceNum = parseInt(price.replace(/[^0-9]/g, ''));
    const totalRoomCost = priceNum * nights;
    const tax = totalRoomCost * 0.18;
    const total = totalRoomCost + tax;

    // Fill Receipt
    document.getElementById('receipt-name').textContent = user.username;
    document.getElementById('receipt-id').textContent = '#BK-' + Math.floor(Math.random() * 100000);
    document.getElementById('receipt-checkin').textContent = checkIn;
    document.getElementById('receipt-checkout').textContent = checkOut;
    document.getElementById('receipt-room').textContent = roomName;
    document.getElementById('receipt-guests').textContent = document.getElementById('guests').value || '2 Adults';
    
    document.getElementById('receipt-nights').textContent = nights;
    document.getElementById('receipt-room-cost').textContent = '₹' + totalRoomCost.toLocaleString();
    document.getElementById('receipt-tax').textContent = '₹' + tax.toLocaleString();
    document.getElementById('receipt-total').textContent = '₹' + total.toLocaleString();

    modal.classList.remove('hidden');
    void modal.offsetWidth;
    modal.classList.add('active');
}

function closeReceiptModal() {
    const modal = document.getElementById('receipt-modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function printReceipt() {
    window.print();
}

function setupAutocomplete(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    if (!input || !list) return;

    input.addEventListener('input', function() {
        const value = this.value;
        list.innerHTML = '';
        if (!value) {
            list.classList.add('hidden');
            return;
        }

        const filtered = indianCities.filter(city => city.toLowerCase().startsWith(value.toLowerCase()));
        
        if (filtered.length > 0) {
            list.classList.remove('hidden');
            filtered.forEach(city => {
                const item = document.createElement('li');
                item.textContent = city;
                item.addEventListener('click', () => {
                    input.value = city;
                    list.classList.add('hidden');
                });
                list.appendChild(item);
            });
        } else {
            list.classList.add('hidden');
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target !== input && e.target !== list) {
            list.classList.add('hidden');
        }
    });
}

// Search Functionality
function searchRooms() {
    const destination = document.getElementById('destination').value || document.getElementById('m-destination').value;
    const checkIn = document.getElementById('check-in').value || document.getElementById('m-check-in').value;
    const checkOut = document.getElementById('check-out').value || document.getElementById('m-check-out').value;
    
    // ... validation ...
    const resultsSection = document.getElementById('rooms');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    updateNavAuth();

    // Mobile menu
    const menuButton = document.querySelector('nav button');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'md:hidden bg-white shadow-lg absolute top-16 left-0 w-full hidden';
    mobileMenu.innerHTML = `
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
            <a href="#rooms" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Rooms</a>
            <a href="#about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>
            <a href="#services" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</a>
            <a href="#contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</a>
            <button onclick="openAuthModal()" class="w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:bg-gray-50 font-bold">Login / Sign Up</button>
        </div>
    `;
    document.querySelector('nav').appendChild(mobileMenu);

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Initialize autocomplete
    setupAutocomplete('destination', 'suggestions-list');
    setupAutocomplete('m-destination', 'm-suggestions-list');

    // Attach click handlers to "View Details" buttons to act as "Book Now" for demo
    // In a real app, View Details -> Details Page -> Book Now.
    // Here we will treat "View Details" as "Book Now" for immediate gratification/receipt demo.
    const viewButtons = document.querySelectorAll('#room-list button');
    viewButtons.forEach(btn => {
        btn.textContent = "Book Now";
        btn.onclick = function() {
            // Find price and room name relative to button
            const card = this.closest('.group'); // The room card
            const roomName = card.querySelector('h3').textContent;
            const price = card.querySelector('.absolute').textContent.split('/')[0].trim();
            bookRoom(roomName, price);
        };
    });
});
