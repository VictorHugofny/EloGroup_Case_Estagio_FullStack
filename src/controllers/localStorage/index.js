const espObj = {
    getData: () => {
        var data = localStorage.getItem("data");
    
        if(!data){
            var object = {
                users: [],
                opportunities: [
                    "RPA",
                    "Produto Digital",
                    "Analytics",
                    "BPM"
                ],
                leadStates: [
                    "Cliente em Potencial",
                    "Dados Confirmados",
                    "Reunião Agendada"
                ]
            }
            localStorage.setItem("data", JSON.stringify(object));
            data = localStorage.getItem("data");
        }

        return JSON.parse(data);
    },

    saveData: (saveData) => {
        localStorage.setItem("data", JSON.stringify(saveData));
    },
    saveDataFromUser: (user) => {
        var data = espObj.getData();

        data.users = data.users.filter(e => !e == data.users.find(e => e.username == user.username));
        
        data.users.push(user);
        espObj.saveData(data);
    },

    registerUser: (username, password) => {
        var data = espObj.getData();

        var retObj;
        if(!data.users.find(e => e.username == username)){
            retObj = {
                username,
                password,
                leads: []
            }
            data.users.push(retObj); 
            espObj.saveData(data);
        }

        return retObj;
    },
    doLogin: (username, password) => {
        var data = espObj.getData();
        var user = data.users.find(e => e.username == username);

        var retObj;
        if(user){
            retObj = user.password == password? user: "wrongPassword";
        }

        return retObj;
    },
    getOpportunities: () => {
        var data = espObj.getData();

        var opportunities = data.opportunities;

        return opportunities;
    },
    getLeadStates: () => {
        var data = espObj.getData();

        var leadStates = data.leadStates;

        return leadStates;
    }
}


export default espObj;