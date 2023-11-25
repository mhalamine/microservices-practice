class Auth {
    constructor(id, username, password) {
      this.id = id;
      this.username = username;
      this.password = password;
    }
  
    static getById(id) {
      return auths.find((o) => o.id === id);
    }
  
    static create(userdata) {
      const id = Date.now().toString();
      const username = userdata.username;
      const passwrod = userdata.password;
      const newAuth = new Auth(id, username, password);
      auths.push(newAuth);
      return newAuth;
    }
  
  }
  
  module.exports = Auth;
  