import axios from "axios";


export const dogModule = {
    state: ()=> ({
        dogList: [],
        dogURL: '',

    }),
    getters: {

    },
    mutations: {
        addDog(state, url){
            state.dogList.push(url)
        }

    },
    actions: {
        async fetchDog({state}){
            try {
                const response =  await axios.get('https://random.dog/woof.json');
                if (response.data.url.substr(-3) != 'mp4'){
                    state.dogURL= response.data.url;
                }
                else {
                    this.fetchDog;
                }
            }
            catch (e){
                alert('Ошибка: ' + e)
            }
        }

    },
    namespaced: true
}

