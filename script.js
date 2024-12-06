function openApp(appName) {
    // Hide the home screen and show the app screen
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('app-screen').classList.remove('hidden');
    
    // Set the app name and content dynamically
    document.getElementById('app-title').innerText = appName;
    const appContent = document.getElementById('app-content');
    
    if (appName === 'PhoneApp') {
        appContent.innerHTML = "<p>Making a call...</p>";
    } else if (appName === 'MessagesApp') {
        appContent.innerHTML = "<p>Reading messages...</p>";
    } else if (appName === 'GalleryApp') {
        appContent.innerHTML = "<p>Viewing photos...</p>";
    } else if (appName === 'PlayStoreApp') {
        // Simulate Play Store with app listing
        appContent.innerHTML = `
            <div class="playstore-app" onclick="installApp('FacebookApp')">
                <img src="facebook-icon.png" alt="Facebook">
                <p>Facebook</p>
                <button class="install-button">Install</button>
            </div>
            <div class="playstore-app" onclick="installApp('InstagramApp')">
                <img src="instagram-icon.png" alt="Instagram">
                <p>Instagram</p>
                <button class="install-button">Install</button>
            </div>
            <div class="playstore-app" onclick="installApp('TwitterApp')">
                <img src="twitter-icon.png" alt="Twitter">
                <p>Twitter</p>
                <button class="install-button">Install</button>
            </div>
        `;
    }
}

function installApp(appName) {
    // Simulate installing the app by adding it to the home screen
    const homeScreen = document.getElementById('home-screen');
    const newApp = document.createElement('div');
    newApp.classList.add('app');
    newApp.innerHTML = `<img src="${appName.toLowerCase()}-icon.png" alt="${appName}"><p>${appName}</p>`;
    
    newApp.onclick = function() {
        openApp(appName);
    };
    
    homeScreen.appendChild(newApp);
    goBack();  // Return to the home screen
}

function goBack() {
    // Hide the app screen and show the home screen again
    document.getElementById('app-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
}
