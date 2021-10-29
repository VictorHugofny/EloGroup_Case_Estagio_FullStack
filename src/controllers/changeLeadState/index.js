import Vue from 'vue';
import lsData from '@/controllers/localStorage/';

export default function(event){
    const elementHolder = event.target.tagName != "TD"? event.target :event.target.children[0]; 

    if(elementHolder.innerText){
        const leadStates = lsData.getLeadStates();
        const lead = Vue.prototype.$user.leads.find(e => e.name == elementHolder.innerText);
        
        const leadIndex = leadStates.indexOf(lead.state);
        const nextState =  leadIndex + 1 > leadStates.length-1? lead.state: leadStates[leadIndex + 1];

        lead.state = nextState;
        
        if(lead.state != leadStates.length - 1){ 
            lsData.saveDataFromUser(Vue.prototype.$user);

            const tdList = elementHolder.parentElement.parentElement.children;
            const nextElement = tdList[leadStates.indexOf(lead.state)]

            nextElement.children[0].remove();
            nextElement.append(elementHolder);
        }
        
    }
} 