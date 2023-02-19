const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = {
  "type": "service_account",
  "project_id": "ceresjengays",
  "private_key_id": "f49c1bb7c0880a8d9256bbeead1b78e05901acc1",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC0Q1nsdi78rySy\n3oqNwVy+qyh8o4XuCzXSlLgnRjehMc6/uMmnf168CgjhqD4JLNwpln2+5jntXd89\n3HKWGOEmbIpacYomwkgtufyishJ1I01vUD7FAIQjXOuZqJxdxnC7wVGdsu9Rj41D\nhTDrfwWLW3XmMY03CnoQ0tYDCwRCFG1PJclqzm4P+8nNkh3L8C+bzlXU/r0eZf64\n8hnMcLpJzx9YAixMg52VQ6kDIYoklHDiJY80oWthSN4Ck9At5JSUrfIU162OY0Dr\nW6ofE7qhoI7bKnquP1/SF/uN+h9FSmWeHpaXK3h5u5yQuhZy9vioqpNgScuHkRC6\nBJ6vv2IlAgMBAAECggEALFW2S6SDiO0wmveF3zhz7YceFY2IVpQWQD0Ij8xCyVf9\nMAUsP5BhheD37zwYSdxpJ6dWNPndvGYOjmHmIslqsq8WVgk/v6mf4/Mu0fr29C1j\nEaIMVhp65VGotmmUT7ILLvpsbts/5fDm/vjGn9zlSbGMbTm5sBRZEkMwlJ4EhZWi\n7v+D/Ep+o8acNHoclqNaX/gtROVdQTImF/j8jh4VrYdyMRz5xC7fGfwCwB4IGHSg\nwqxb5gZGcvyXm2jCSzPcfzmdXlTxsqHrZjUpxYsCokERBFJFR3+VY9G6L4LyU+oW\nqXf1k0ra2l79P1NZi//f7aq+w+kWHTE/RCWDerYywQKBgQD1tUZ4DzHMrbZsk9kh\nmVFq/HeUOx7+iSWmmS7ImFsStYBNbS6e487phqwSX6Ktsy6l1MY/W9AksgHODRiX\nlHCKvmvb3ravjrGi5H9nMn/oFBoFNDi4dSUjCx8KkNT/GiFaRpblN3gKsCb912Sm\nvYETROb8R3ZezvF578yn/C6FxQKBgQC70E9aMQgRW7Ui+8KsH29qIKLuqH/iTzg1\nNnMcXHSSJva3iy4ZhVDWop0y+YioOtiYcDLO8ITn+VQXo1T3FdNegy8Cs2dwHtA+\n9fn4P/imHiGf79cC3CtB1FHXxZQVG9XNt6f7JLkKfLx3jZOFx5+OgSjXZvgxJmF3\nPcQv5/mQ4QKBgQDWCf3DJGlbRY/+caTaUfbM3fVFGWNclBhKUnKgp6feWmHUEOJl\n40khwQEwWEMcUVS3fOzd0Js2/CH6XwonMVYAZvUKaa52rDUuEyKwwRsPDkPEeMNY\nXCPnrQ5zY8tIFnkrbQaR0oottVmiEvpJDhfcs08MQSxqVpeggzait1nHiQKBgE6o\n2BM2JeLfPeYA+2+LWuZf9N1vxN/LvgbLXzqpnkj3+Ky2pgAaTdkXEi+fQxTyUHTH\nyP/SzFc7nXSo+5Tglz4mQzImYVQcE6vK6X6HjGRGil6p3Ktd+t//RKfSIEsW9VzL\nZpdQsg8qXuTTbs3A5ZqRjcFpZtlu8bM3M0u9JFEBAoGBAJYoeAtO7av5FtAOKACo\nslIU447jqdFD2ZJfftdO/s1mf4HQFmqsaNYTZ6XvicttWAui6FuOYVWptO/j6oWY\n/1TUkUhAqxXSDwZdMXl3Tng5MP4AUJ8B9A1dJB9Jer8vGfCXUxzC852PrQy9acnN\n95a4lJwxLg7gDRBQkVAjpbBk\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-s3yh1@ceresjengays.iam.gserviceaccount.com",
  "client_id": "110949071310221479083",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-s3yh1%40ceresjengays.iam.gserviceaccount.com"
};

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

