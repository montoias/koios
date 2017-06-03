import { Meteor } from 'meteor/meteor';

const requestPermissions = [
  'public_profile',
  'email'
];

const loginWithFacebook = () => {
  Meteor.loginWithFacebook(
    { requestPermissions },
    err => { err }
  );
}

export {
  loginWithFacebook
}