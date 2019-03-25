import remote from "../services/remote.js";

let auth = (() => {
  function isAuth() {
    return sessionStorage.getItem("authtoken") !== null;
  }

  function saveSession(userData) {
    sessionStorage.setItem("authtoken", userData._kmd.authtoken);
    sessionStorage.setItem("username", userData.username);
    sessionStorage.setItem("userId", userData._id);
    sessionStorage.setItem("isAdmin", userData.isAdmin);
    sessionStorage.setItem("profilePic", userData.profilePic);
  }

  function register(username, password, isAdmin, profilePic) {
    let obj = { username, password, isAdmin, profilePic };

    return remote.post("user", "", "basic", obj);
  }

  function login(username, password) {
    let obj = { username, password };

    return remote.post("user", "login", "basic", obj);
  }

  function logout() {
    return remote.post("user", "_logout", "Kinvey");
  }

  function test(username, password, profilePic) {
    // public string profilePic { get; set; }
    // public string username { get; set; }
    let user = {
      username: username,
      password: password,
      profilePic: profilePic
    };
    return remote.post2(
      "user",
      `register?username=${username}&password=${password}&profilepic=${profilePic}`
    );
  }

  return {
    isAuth,
    login,
    logout,
    register,
    saveSession,
    test
  };
})();
export default auth;
