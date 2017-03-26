import firebase from '../core/firebase';
import resolver from '../core/di';

export default class UserService {

  static get USER_COOKIE_KEY() {
    return "user";
  }

  currentUser() {
    return firebase.auth().currentUser;
  }

  isLoggedIn() {
    return this.currentUser() instanceof Object;
  }

  auth(login,password) {
    return firebase.auth().signInWithEmailAndPassword(`${login}@univa.mx`, password).then((user) => {


       user.getToken().then((token) => {
          this.saveUserToCookie(token);
       });

       return user;
    });
  }

  cookieAuth() {

    return resolver.get('cookieService').get("user").then((token) => {
        return token != null;
    });

  }

  authToken(token) {
    return firebase.auth().signInWithCustomToken(token).then((user) => {
      user.getToken().then((token) => {
         this.saveUserToCookie(token);
      });
      return user;
    });
  }

  logout() {
    resolver.get('cookieService').clear();
    return firebase.auth().signOut();
  }

  saveUserToCookie(token) {
    resolver.get('cookieService').set("user",token);
  }

}
