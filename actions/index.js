import * as types from '../constants/actionTypes';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';

export const saveMyData = data => {
    const id = 1;
    return { type: types.SAVE_MY_DATA, payload: { [1]: data } };
};

export function loadSuccess(){
    let data = {};
    return async (data) => {
        const numberOfBets = factory.methods.numberOfBets().call();
        const totalBet = await factory.methods.totalBet().call();
        const minimumBet = await factory.methods.minimumBet().call();
        const maxAmountofBets = await factory.methods.maxAmountOfBets().call();
        const roundsWithOutWinner = await factory.methods.roundsWithOutWinner().call();
        
        data = {
            numberOfBets,
            totalBet: web3.utils.fromWei(totalBet, 'ether'),
            minimumBet: web3.utils.fromWei(minimumBet, 'ether'),
            maxAmountofBets,
            roundsWithOutWinner
        }
    }
    return { type: types.DATA_LOAD_SUCCESS, data};
    
};