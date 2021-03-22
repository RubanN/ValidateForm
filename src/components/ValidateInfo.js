export default function ValidateInfo(values){
    let errors ={}
      
    if(!values.username.trim()){
        errors.username = "username required"
    }
    //Email
    if(!values.email){
        errors.email = "email required"
    }else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email ="Email address is invalid"
    }
    if(!values.password){
        errors.password = "password required"
    }else if(values.password.length <6){
        errors.password = "Password needs to be 6 characters or more"
    }
    if(!values.password2){
        errors.password2 = "Password is required"
    }else if(values.password2 !== values.password){
        errors.password2 = "Passwords do not match"
    }
    return errors
}