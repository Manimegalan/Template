import axios from "axios";

const apiCall = async (method, url, data, headertype, baseurl) => {
  let site_url = `${global.site_url}/api/user/`;
  if (baseurl) {
    site_url = `${global.site_url}/api/${baseurl}/`;
  }

  return new Promise(async (resolve, reject) => {
    let type = "";
    if (headertype && headertype === "formdata") {
      type = "multipart/form-data";
    } else {
      type = "application/json";
    }
    const config = {
      headers: {
        "content-type": type,
      },
    };
    switch (method) {
      case "post":
        try {
          data = data ? data : {};
          const res = await axios.post(`${site_url}${url}`, data, config);
          console.log("responsode from api", res);
          resolve(res);
          break;
        } catch (err) {
          console.log("responsode error from api", err.response);
          resolve(err);
          break;
        }
      case "get":
        try {
          const res = await axios.get(`${site_url}${url}`, config);
          resolve(res);
          break;
        } catch (err) {
          console.log("responsode error from api", err);
          resolve(err);
          break;
        }
      default:
        return null;
    }
  });
};

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["authorization"];
  }
};

const setIPAddress = (ipaddress) => {
  if (ipaddress) {
    axios.defaults.headers.common["ipaddress"] = ipaddress;
  } else {
    delete axios.defaults.headers.common["ipaddress"];
  }
};

export { apiCall, setAuthToken, setIPAddress };
