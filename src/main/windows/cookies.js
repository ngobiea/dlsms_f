const { session } = require("electron");

exports.manageCookies = () => {
  let ses = session.defaultSession;
  const getCookies = () => {
    ses.cookies
      .get({})
      .then((data) => {
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const isSetCookie = (data) => {
    const result = ses.cookies
      .get({ name: data })
      .then((cookies) => {
        if (cookies.length !== 0) {
          return true;
        }
        return false;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
    return result;
  };
  const getCookie = (data) => {
    const result = ses.cookies
      .get({ name: data })
      .then((cookies) => {
        // console.log(cookies);
        return cookies;
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
    return result;
  };

  const setCookies = (data) => {
    console.log(data);
    ses.cookies
      .set(data)
      .then((result) => {
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const removeCookies = (url, name) => {
    ses.cookies
      .remove(url, name)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    getCookies,
    setCookies,
    removeCookies,
    isSetCookie,
    getCookie,
  };
};
