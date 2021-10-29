import Vue from 'vue';
import router from '@/router/';
import lsData from '@/controllers/localStorage/';

import handleErrorClass from '@/controllers/handleErrorClass/'; 


export default function (){ 
    const userInput = document.getElementById("loginUserInput");
    const userPassword = document.getElementById("loginPassword");
    const userConfirmPassword = document.getElementById("loginConfirmPassword");

    var canRun;
    canRun = handleErrorClass(userInput);

    var checkRegex = userPassword.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/) == undefined;
    var otherInput = handleErrorClass(userPassword, checkRegex);
    canRun = canRun && otherInput; 
    
    var checkEqual = !(userConfirmPassword.value == userPassword.value);
    otherInput = handleErrorClass(userConfirmPassword, checkEqual);
    canRun = canRun && otherInput;  

    if(canRun){
        var loginUser = lsData.registerUser(userInput.value, userPassword.value);

        if(!loginUser){
            userInput.parentElement.classList.add("error");
            userInput.value = "Usuário já existe";
            userPassword.value = "";
            userConfirmPassword.value = "";

        } else {
            Vue.prototype.$user = loginUser;
            router.push("registerSuccess"); 
        } 
    }
}