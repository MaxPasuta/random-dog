import axios from "axios";


export const dogModule = {
    state: ()=> ({
        dogList: [],
        dogURL: '',
        isDogLoading: false,

    }),
    getters: {

    },
    mutations: {
        delDog(state, id){
            state.dogList = state.dogList.filter((item) => item.id !== id);
        },
        addDog(state, url){
            state.dogList.push({
                id: Date.now(),
                URL:url,
            })
        },
        setLoading(state, bool){
            state.isDogLoading = bool;
        }

    },

    actions: {
        async fetchDog({state, commit}){
            try {
                commit('setLoading', true)
                state.dogURL = null
                while (state.dogURL == null){
                    const response =  await axios.get('https://random.dog/woof.json');
                    if (response.data.url.substr(-3) != 'mp4'&&response.data.url.substr(-4) != 'webm'){
                        state.dogURL= response.data.url;
                    }
                }
            }
            catch (e){
                alert('Ошибка: ' + e)
            }
            finally {
                commit('setLoading', false)
            }
        }

    },
    namespaced: true
}

