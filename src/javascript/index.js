let dark_mode = false;

function run_on_load() {
    let switcher = document.querySelector("#theme-switch");
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        switcher.checked = true;
        dark_mode = true;
    }
    update_color_scheme();
}

function toggle_dark_mode() {
    dark_mode = !dark_mode;
    update_color_scheme();
}

function update_color_scheme() {
    let icon = document.getElementById("icon");
    if (dark_mode) {
        icon.setAttribute("href", "/res/icon-transparent-square-inverted.svg?raw=true");
    } else {
        icon.setAttribute("href", "/res/icon-transparent-square.svg?raw=true");
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    dark_mode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.querySelector("#theme-switch").checked = dark_mode;
    update_color_scheme();
});

// themeSwitch.addEventListener('change', function (e) {
//     if(e.currentTarget.checked === true) {
//         // Add item to localstorage
//         localStorage.setItem('switchedTheme', 'true');
//     } else {
//         // Remove item if theme is switched back to normal
//         localStorage.removeItem('switchedTheme');
//     }
// });
