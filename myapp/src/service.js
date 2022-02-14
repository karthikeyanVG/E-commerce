import axios from "axios";

export const register = newUser => {
    return axios.post("http://localhost:5000/customer/register", {
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        password: newUser.password,
        confirmPassword: newUser.confirmPassword
    })
        .then(response => {
            if (response.data.error) {
                console.log("user is already register");
                alert("user is already register");
            } else {
                console.log("Registered", response);
            }
        })
        .catch(err => {
            console.log(err);
        });

};

export const login = userData => {
    return axios.post("http://localhost:5000/customer/login", {
        email: userData.email,
        password: userData.password
    }).then(res => {
        if (res.data.error) {
            alert("Not register")
        } else {
            localStorage.setItem("usertoken", res.data);
            console.log(res.data);
            alert("your login succfully")
        }
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}