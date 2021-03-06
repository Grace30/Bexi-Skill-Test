let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let submitInput = document.querySelector('#button');
let titleMsj = document.querySelector('.title-message');
let msjDiv = document.querySelector('.message-newsletter');
let formDiv = document.querySelector('.newsletter-form');
let ctaHeader = document.querySelector('.header-subscribe > .cta-link');
let ctaFooter = document.querySelector('.cta-subscribe > .cta-link');
let titleHeader = document.querySelector('.header-title');
let emailDiv = document.querySelector('.email-info');

submitInput.addEventListener('click', function () {
    let validEmail = validateEmail(emailInput.value);
    if (nameInput.value != '' && emailInput.value != '' && validEmail) {
        setCookie("user-data", nameInput.value);
        setCookie("email-data", emailInput.value);
        checkCookie();
    }
});

function setCookie(cookieName, cookieValue) {
    let minTime = new Date();
    minTime.setTime(minTime.getTime() + (5 * 60 * 1000));
    let expires = "expires=" + minTime.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + expires + "; path=/";
}

function getCookie(cookieName) {
    let name = cookieName + "=";
    let strCookie = document.cookie.split(';');
    for (let i = 0; i < strCookie.length; i++) {
        let c = strCookie[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    nameInput.value = '';
    emailInput.value = '';
    let userName = getCookie('user-data');
    let userEmail = getCookie('email-data');
    let spanHeader = document.createElement("span");
    let titleSub = document.createElement("span");
    let titleEmail = document.createElement("span");
    if (userName != "" && userEmail != "") {
        msjDiv.classList.remove('display-none');
        titleMsj.innerHTML = 'Welcome back ' + userName;
        formDiv.classList.add('display-none');
        ctaHeader.classList.add('display-none');
        ctaFooter.classList.add('display-none');
        spanHeader.className = "user-name";
        spanHeader.textContent = userName;
        titleHeader.textContent = 'Welcome back ';
        titleHeader.appendChild(spanHeader);
        titleSub.className = "title-subs";
        titleSub.textContent = 'You are Already Subscribed';
        titleEmail.className = "title-email";
        titleEmail.textContent = userEmail;
        emailDiv.appendChild(titleSub);
        emailDiv.appendChild(titleEmail);
    } else {
        msjDiv.classList.add('display-none');
    }
}

function validateEmail(value) {
    let flagEmail = true;
    if (/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i.test(value)) {
        flagEmail = true;
    } else {
        flagEmail = false;
    }
    return flagEmail;
}

function lettersOnly(event) {
    let key = event.keyCode;
    if (((key >= 65 && key <= 90) || (key >= 97 && key <= 122) || key == 8)) {
        return true;
    } else {
        event.preventDefault()
    }
};

window.onload = checkCookie();