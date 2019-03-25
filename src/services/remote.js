import $ from "jquery";
import React from "react";

let remote = (() => {
  const BASE_URL = "https://baas.kinvey.com/";
  const BASE_URL2 = "http://localhost/api/";
  const APP_KEY = "kid_B114qRX7m"; // APP KEY HERE
  const APP_SECRET = "27b0d97397e44aae9e1c7f7f9c510a46"; // APP SECRET HERE

  function makeAuth(type) {
    return type === "basic"
      ? "Basic " +
          btoa("kid_B114qRX7m" + ":" + "27b0d97397e44aae9e1c7f7f9c510a46")
      : "Kinvey " + sessionStorage.getItem("authtoken");
  }

  // request method (GET, POST, PUT)
  // kinvey module (user/appdata)
  // url endpoint
  // auth

  function makeRequest2(method, module, endpoint) {
    return {
      url: BASE_URL2 + module + "/" + endpoint,
      method: method
    };
  }

  function makeRequest(method, module, endpoint, auth) {
    let sad = makeAuth(auth);

    return {
      url: BASE_URL + module + "/" + APP_KEY + "/" + endpoint,
      method: method,

      headers: {
        Authorization: makeAuth(auth)
      }
    };
  }

  function get(module, endpoint, auth) {
    return $.ajax(makeRequest("GET", module, endpoint, auth));
  }

  function post(module, endpoint, auth, data) {
    let obj = makeRequest("POST", module, endpoint, auth);
    if (data) {
      obj.data = data;
    }
    return $.ajax(obj);
  }

  //C# BACKEND TEST
  function post2(module, endpoint, data) {
    let obj = makeRequest2("POST", module, endpoint);
    if (data) {
      obj.data = data;
    }
    return $.ajax(obj);
  }

  function update(module, endpoint, auth, data) {
    let obj = makeRequest("PUT", module, endpoint, auth);
    obj.data = data;
    return $.ajax(obj);
  }

  function remove(module, endpoint, auth) {
    return $.ajax(makeRequest("DELETE", module, endpoint, auth));
  }

  return {
    get,
    post,
    update,
    remove,
    post2
  };
})();
export default remote;
