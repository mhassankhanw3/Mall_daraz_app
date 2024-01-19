(function () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyB77UvNq3sV4NE2ihYvaiKkdeUDuim4qPI",
      projectId: "darazmall-6b211",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    const db = firebase.firestore();
  
    // Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
  
    const btnLogin = document.getElementById("btnLogin");
  
    // Add Signup Event
    btnLogin.addEventListener("click", async (e) => {
      // Get email, password, firstname, lastname, and phone number
      const email = txtEmail.value;
      const password = txtPassword.value;
  
      const auth = firebase.auth();
  
      try {
        // Signup with Firebase Auth
        const userCredential = await auth.signInWithEmailAndPassword(
          email,
          password
        );
        const user = userCredential.user;
  
        // Add user data to Firestore
  
        //   alert("Signup Successful :)");
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "You have successfully Login.",
          confirmButtonColor: "#f57224",
        });
        setTimeout(() => {
          window.location.href = "/index.html";
        }, 2000);
      } catch (err) {
        //   alert(err.message);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });
      }
    });
  })();
  