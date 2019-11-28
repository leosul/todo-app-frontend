import { CombineReducers, combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        },{
            id: 2,
            description: 'Reunião as 10',
            done: true
        },{
            id: 3,
            description: 'Almoço as 13',
            done: false
        }]
    })
})


export default rootReducer