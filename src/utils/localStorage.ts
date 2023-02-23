const JWT_KEY = "preonboardingintershipteam2-todo-app";

function saveToken(token: string) {
  window.localStorage.setItem(JWT_KEY, token);
}

function getToken() {
  return window.localStorage.getItem(JWT_KEY);
}

function removeToken() {
  window.localStorage.removeItem(JWT_KEY);
}

export { saveToken, getToken, removeToken };
