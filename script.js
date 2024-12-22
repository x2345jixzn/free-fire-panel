(function() {
    const secretPassword = "101"; // পাসওয়ার্ড এখানে সংরক্ষণ করুন

    // পাসওয়ার্ড যাচাই ফাংশন
    window.validatePassword = function(inputPassword) {
        if (inputPassword === secretPassword) {
            console.log("Access Granted! Password Matched.");
            mainFunctionality();
        } else {
            console.log("Access Denied! Incorrect password.");
        }
    };

    // মূল কার্যকারিতা (কোড এখানে যুক্ত করুন)
    const mainFunctionality = () => {
        console.log("Running the protected functionality...");
        
        // এখানে তোমার কোড যুক্ত কর

// "Demo account" টেক্সট পরিবর্তন করে "Real account" করা
const accountNameElement = document.getElementById('account-name');
if (accountNameElement) {
  accountNameElement.textContent = 'Real account';
} else {
  console.error('Account name element not found!');
}

// রিফ্রেশ বাটন হাইড করা
const refreshButton = document.getElementById('refresh-btn');
if (refreshButton) {
  refreshButton.style.display = 'none';
} else {
  console.error('Refresh button not found!');
}
// মূল জাভাস্ক্রিপ্ট কোড (GitHub raw লিংকে থাকবে)
(function() {
    const secretPassword = "11"; // এখানে পাসওয়ার্ড সংরক্ষণ করুন

    // মূল কার্যকারিতা (এখানে কোড যোগ করুন)
    const mainFunctionality = () => {
        console.log("Access Granted! Running the main functionality...");
        // এখানে তোমার কোড যোগ করো
        console.log("Hello, this is the protected code!");
    };

    // পাসওয়ার্ড যাচাই ফাংশন
    window.validatePassword = function(inputPassword) {
        if (inputPassword === secretPassword) {
            mainFunctionality();
        } else {
            console.log("Incorrect password! Access denied.");
        }
    };
})();
// এখানে তোমার মূল কোড যোগ করো
        console.log("Hello, this is the protected code running securely!");
    };
})();
