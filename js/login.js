function loginCheck() {

    let loginForm = document.loginForm
    let username = loginForm.username.value
    let password = loginForm.password.value

    const loginData = [
        {
            username : 'salaudeenkr@gmail.com',
            password : 'salaudeenkr'
        },
        {
            username : 'classicread1@gmail.com',
            password : 'classicread1'
        },
        {
            username : 'opeyemi@gmail.com',
            password : 'opeyemi123'
        },
        {
            username : 'ukclient@gmail.com',
            password : 'ukclient'
        }
    ]
    
    
    if (username == '' || username == null || password == '' || password == null) {
    alert('Username and password cannot be empty')
    console.log('Username and password cannot be empty');
    return false
    
    } 
    else if (password.length < 8) {
        alert('Invalid password, Password must be up to 8 characters')
        console.log('Invalid password, Password must be up to 8 characters');
        return false
        
        } 
    else if (loginData.find(element => element.username  == username && element.password == password)) {
    alert('Access granted to '+ username)
    console.log('Access granted to ' + username);
    let loginSession = {
        username : username,
        password : password,
        status : 'logged in'
    }
    sessionStorage.setItem('activeUser', JSON.stringify(loginSession))
    return true
    }
    else {
    alert('Username and password is incorrect')
    console.log('Username and password is incorrect');
    return false
    }  
    }

    let submitForm = document.loginForm
    submitForm.loginBtn.onclick(loginCheck)