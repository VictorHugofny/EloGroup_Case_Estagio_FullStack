import Vue from 'vue';
import router from '@/router/';
import lsData from '@/controllers/localStorage/';

import handleErrorClass from '@/controllers/handleErrorClass/'; 


export default function (){ 
    const userInput = document.getElementById("loginUserInput");
    const userPassword = document.getElementById("loginPassword");

    var canRun;
    canRun = handleErrorClass(userInput); 
    var otherInput = handleErrorClass(userPassword);
    canRun = canRun && otherInput; 

    if(canRun){
        var loginUser = lsData.doLogin(userInput.value, userPassword.value);

        var boolCheck = !loginUser
        var wrongPassword = loginUser == "wrongPassword"
        if(boolCheck || wrongPassword){
            userInput.parentElement.classList.add("error");
            userInput.value = wrongPassword? "Senha incorreta": "Usuário não existe";
            userPassword.value = ""; 

        } else {
            Vue.prototype.$user = loginUser;
            router.push("loginSuccess"); 
        } 
    }
}