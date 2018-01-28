  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDiUCYT-FKJglsxm2EUKzTAju254E1kNpc",
    authDomain: "shehacks-2018.firebaseapp.com",
    databaseURL: "https://shehacks-2018.firebaseio.com",
    projectId: "shehacks-2018",
    storageBucket: "shehacks-2018.appspot.com",
    messagingSenderId: "712953801650"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('submittedEntries').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();
    
// Get values
    var username = getInputVal('username');
    var date = getInputVal('date');
    var entry = getInputVal('entry');
    
// Save message
    saveMessage(username, date, entry);
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to Firebase
function saveMessage(username, date, entry) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        username:username,
        date:date,
        entry:entry
    });
}

