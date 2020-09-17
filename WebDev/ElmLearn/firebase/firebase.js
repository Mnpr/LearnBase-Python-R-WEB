  
    let todoList = data.itemsList;
    
    var firebaseConfig = {
      apiKey: "AIzaSyAvOgDAOYKDYNDob-IjhVPp-U0JGN2gFBQ",
      authDomain: "today-elm.firebaseapp.com",
      databaseURL: "https://today-elm.firebaseio.com",
      projectId: "today-elm",
      storageBucket: "today-elm.appspot.com",
      messagingSenderId: "302751952762",
      appId: "1:302751952762:web:59f0c3d67555bdd3dcf0c3"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     
    if (!firebase.apps.length) {
    firebase.initializeApp({});
    }


    todoList.map(element => {
      writeData(element);
    });

    writeData = (x) => { 
        firebase.database().ref("todo").set({
          id : x.id,
          // info: x.info,
          // check: x.isComplete
        });
      }










      let todoList = data.itemsList;

    todoList.forEach((element) => {
      writeData(element);
    });
    
    writeData = (x) => { 
        firebase.database().ref("todo-elm").set({
          id : id,
          info: info,
          check: isComplete
        });
      }

    const dbRef = firebase.database().ref();
    const todoRef = dbRef.child('todo-elm');