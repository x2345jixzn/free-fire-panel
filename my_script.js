// Configuration object for various settings like currency and levels
const lanes = {
  "USD": {
    "cifrao": "$",
    "pro": 5000,
    "vip": 10000
  },
  "en": {
    "conta_real": "Live Account",
    "conta_real_mobile": "LIVE",
    "padrao": "standard",
    "lucro_0": "+0% profit",
    "lucro_2": "+2% profit",
    "lucro_4": "+4% profit"
  }
};

// Function to convert a currency string into a float number
function currencyToFloat(currency) {
  return Number(currency.replace(/[^0-9.-]+/g, ""));
}

// Function to retrieve the machine ID from Chrome's local storage
function getMachineId() {
  chrome.storage.local.get('machineId', function (item) {
    if (item.machineId) {
      machineId = item.machineId;
    }
  });
}

// Function to insert custom CSS dynamically into the page
function insertCustomCss() {
  const css = `
    .tab__payout2 { visibility: hidden; position: absolute; }
    .usermenu__info-balance2 { display: none; }
    .usermenu__info-balance { font-weight: bold; color: var(--color-black); white-space: nowrap; }
    .assets-table__percent__changed { display: none; }
    .section-deal__percent2 { display: none; }
  `;

  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// Self-executing function to initialize and update the page dynamically
(function init() {
  // Insert custom CSS
  insertCustomCss();

  // Periodically update user profile levels and balance display
  setInterval(() => {
    // Fetch the balance element
    const balanceElement = document.querySelector(".usermenu__info-balance");
    if (!balanceElement) return;

    // Parse the balance value
    let balance = currencyToFloat(balanceElement.textContent);

    // Determine the level details based on balance
    let levelName, levelProfit, icon;
    if (balance < lanes.USD.pro) {
      levelName = lanes.en.padrao.toUpperCase() + ":";
      levelProfit = lanes.en.lucro_0;
      icon = `<svg class="icon-profile-level-standart"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-standart"></use></svg>`;
    } else if (balance >= lanes.USD.pro && balance < lanes.USD.vip) {
      levelName = "PRO:";
      levelProfit = lanes.en.lucro_2;
      icon = `<svg class="icon-profile-level-pro"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-pro"></use></svg>`;
    } else {
      levelName = "VIP:";
      levelProfit = lanes.en.lucro_4;
      icon = `<svg class="icon-profile-level-vip"><use xlink:href="/profile/images/spritemap.svg#icon-profile-level-vip"></use></svg>`;
    }

    // Update the user menu levels
    const levelsElement = document.querySelector(".usermenu__info-levels");
    if (levelsElement) levelsElement.innerHTML = icon;

    const dropdown = document.querySelector(".usermenu__dropdown");
    if (dropdown) {
      dropdown.querySelector(".usermenu__level-icon").innerHTML = icon;
      dropdown.querySelector(".usermenu__level-name").textContent = levelName;
      dropdown.querySelector(".usermenu__level-profit").textContent = levelProfit;

      // Update balance display in dropdown
      const balanceDisplays = dropdown.querySelectorAll(".usermenu__select-balance");
      if (balanceDisplays.length >= 2) {
        balanceDisplays[0].textContent = balanceElement.textContent;
        balanceDisplays[1].textContent = `$${lanes.USD.vip.toLocaleString()}.00`;
      }

      // Toggle active classes for account types
      const realRadio = dropdown.querySelectorAll(".usermenu__select-item--radio")[0];
      const demoRadio = dropdown.querySelectorAll(".usermenu__select-item--radio")[1];
      if (realRadio && demoRadio) {
        realRadio.classList.add("active");
        demoRadio.classList.remove("active");
      }
    }

    // Update the user name to show "Live Account"
    const userNameElement = document.querySelector(".usermenu__info-name");
    if (userNameElement) {
      userNameElement.textContent = lanes.en.conta_real;
    }

  }, 100);
})();
