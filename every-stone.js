function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    //want to check each user in submittedUsers against good users
      //use every on submittedUsers why??
      //what are we testing? We are testing if each user.id is equal to every good user.id

      return submittedUsers.every(function(user) { //each user. This will return false, if it finds a falsy value. If not, it will continue searching.
        return goodUsers.some(function(goodUser){ //each goodUser

          //the test condition: if each user.id is equal to every good user.id
          return user.id === goodUser.id;//this is test for both every and some!!
        });
      });


      //every will check every element until it finds a falsy value. If it finds a falsy value, it will return false. If the callback returns a truthy value for all elements, every() returns true.


      //some will check every element in the array until the callback returns a truthy value. If there is a truthy value, Some() will return true. If there is not a truthy value, it will return false.
  };
}

module.exports = checkUsersValid
