import Vue from 'vue';
import router from '@/router/';
import lsData from '@/controllers/localStorage/';
import handleErrorClass from '@/controllers/handleErrorClass/'; 
import handleErrorClassTable from '@/controllers/handleErrorClassTable/'; 

export default function(event) {
    event.stopPropagation();

    const leadName = document.getElementById("leadInfosName");
    const leadTel = document.getElementById("leadInfosTel");
    const leadEmail = document.getElementById("leadInfosEmail");
    const opportunities = document.getElementById("opportunitiesId");

    var canRun;
    canRun = handleErrorClass(leadName);

    var otherBool = handleErrorClass(leadTel);
    canRun = canRun && otherBool; 
     
    otherBool = handleErrorClass(leadEmail);
    canRun = canRun && otherBool;  
    
    const table = opportunities.querySelector("table");
    const noHeaderChildren = Array.from(table.children).filter(e=>!e.classList.contains("tableHeader"));
    const result = noHeaderChildren.filter(e=>e.querySelector("input").checked);
    
    otherBool = handleErrorClassTable(opportunities, !result.length);
    canRun = canRun && otherBool;  

    if(canRun){
        var leadExists = handleErrorClass(leadName, Vue.prototype.$user.leads.find(e => e.name == leadName.value));
        if(leadExists){   
            var leadStates = lsData.getLeadStates();         
            var pushObject = {
                name: leadName.value,
                state: leadStates[0],
                contacts: {
                    tel: leadTel.value,
                    email: leadEmail.value
                },
                opportunities: []
            }

            result.forEach(e => { 
                pushObject.opportunities.push(e.querySelector("p").innerText);
            }); 

            Vue.prototype.$user.leads.push(pushObject);
            lsData.saveDataFromUser(Vue.prototype.$user);
            
            router.push("leadAddSuccess");
        } else {
            leadName.value = "Lead já existe"
        } 
    }
}