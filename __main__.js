const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents


// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // The database URL depends on the location of the database
  databaseURL: "https://ceresjengays-default-rtdb.firebaseio.com/"
});


module.exports = async (number = "+14168482770") => {
  // As an admin, the app has access to read and write all data, regardless of Security Rules
  var db = admin.database();
  var ref = db.ref("/");
  var snapshot = await ref.once("value");
  var results = snapshot.val();
  let msg = "Happy Sunday! \n";
  var arr = [];
  
  for (var place in results) {
    arr.push(place);
    //console.log(`${results[place]["Notify"]}`);
  }
  
  let line1 = "Check out what's new at PLACE! Offer includes FOOD, FOOD, FOOD, and FOOD.\n";
  let line2 = "Enjoy this half-price deal on FOOD from PLACE.\n";
  let line3 = "Treat yourself with FOOD, FOOD, and FOOD from PLACE.\n";
  let line4 = "Grab some Family Day favourites from PLACE at 25% off. Offer includes FOOD and FOOD.\n"; 
  
  for (var n=arr.length; n--; ){
    var place = arr[n];
    if (results[place]["Notify"]) {
      console.log(`Resturant Name: ${place}`);
      var count = 0;
      for (var item in results[place]) {
        if (results[place][item]["Name"]) {
          count += 1;
        }
      }
      
      let tmpline = "";
      
      if (count == 1) {
        tmpline = line2;
      } else if (count == 2) {
        tmpline = line4;
      } else if (count == 3) {
        tmpline = line3;
      } else if (count == 4) {
        tmpline = line1;
      }
      
      for (var item in results[place]) {
        if (results[place][item]["Name"]) {
          tmpline = tmpline.replace('PLACE', place);
          let name = results[place][item]["Name"];
          console.log(`Item Name: ${name}`);
          tmpline = tmpline.replace('FOOD', name);
        }
      }
      
      msg += tmpline;
    }
  }
  
  console.log(`\nMsg: ${msg}`);
  
  const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  
  await lib.utils.sms['@2.0.2']({
    to: `${number}`,
    body: `${msg}Browse with a tap. ${url}`
  });
  return results;
};

