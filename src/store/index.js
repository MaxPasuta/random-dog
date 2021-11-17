import {createStore} from 'vuex'
import {dogModule} from "@/store/dogModule";


export default createStore({
    modules: {
        dog: dogModule
    }

})