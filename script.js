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
