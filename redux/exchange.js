import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



const initialState = {
    service:{
        type:"",
        quantity:"",
    },
    description:"",
    transaction:{
        id:"tx0",
        status:"info",
        statusText:"look"
    },
    paymentInfo:{
        bank:{
            bankName:"Mayor Bank",
            acctName:"John Cage",
            acctNo:"000333322",
            amount:"3452.56",
        },
        crypto:{
            baseName:"ETH",
            name:"Etherum",
            address:"0x00",
            amount:"3433"
        }
    },
    recieveInfo:{
        bank:{
            bankName:"",
            acctName:"",
            acctNo:"999",
            amount:"",
        },
        crypto:{
            baseName:"Eth",
            name:"Etherum",
            address:"0x00",
            amount:"3433"
        } 
    },
    prove:{
        debit:"",
        credit:""
    }
};

export const slice = createSlice({
  name: 'exchange',
  initialState: initialState,
  reducers: {
    populate(state, action){
        return action.payload;
    },

    addService(state, action){
        const {type, quantity, description} = action.payload;
        state.service = {type, quantity};
        state.description = description;
    },

    registerTx(state, action){
        const {id, status} = action.payload;
        state.transaction = {id, status:status??"idle"};
    },

    updateTxStatus(state, action){
        const status = action.payload;
        state.transaction.status = status;
    },

    //buyer payment proof
    addDebitProve(state, action){
        const data = action.payload;
        state.prove.debit = data;
    },
    
    //seller recieve proof 
    addCreditProve(state, action){
        const data = action.payload;
        state.prove.credit = data;
    }

  },
});



// Action creators are generated for each case reducer function
export const { addService, addDebitProve, addCreditProve} = slice.actions

export default slice.reducer;