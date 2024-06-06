function validation(values) {
    let error = {};
  
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    const phone_pattern = /^\d{10}$/;



    //phone validation
    if (values.phone === "") {
        error.phone = "phone should not be empty"
      } else if (!phone_pattern.test(values.phone)) {
        error.phone = "Digit can't exceed or less than 10"
      } else {
        error.phone = ""
      }
  
    // name validation
    if (values.name === "") {
        error.name = "Name should not be empty"
      } else {
        error.name = ""
      }

    // email validation
    if (values.email === "") {
      error.email = "Email should not be empty"
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email didn't match"
    } else {
      error.email = ""
    }


    // password validation
    if (values.password === "") {
      error.password = "Password should not be empty"
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password pattern didn't match"
    } else {
      error.password = ""
    }

    // confirm password validation
    if (values.confirmPassword === "") {
      error.confirmPassword = "Password should not be empty"
    } else if (!password_pattern.test(values.confirmPassword)) {
      error.confirmPassword = "Password pattern didn't match"
    } else {
      error.confirmPassword = ""
    }
    //it checks match for of password and confirm password
    if (values.confirmPassword === "") {
        error.confirmPassword = "Confirm password should not be empty";
      } else if (values.confirmPassword !== values.password) {
        error.confirmPassword = "Password not match";
      } else {
        error.confirmPassword = "";
      }
    return error
  }
  
  export default validation;
  