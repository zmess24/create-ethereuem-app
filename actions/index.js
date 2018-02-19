import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';

export function fetchSummary(){
    return async function (dispatch) {
        const numberOfBets = await factory.methods.numberOfBets().call();
        const totalBet = await factory.methods.totalBet().call();
        const minimumBet = await factory.methods.minimumBet().call();
        const maxAmountofBets = await factory.methods.maxAmountOfBets().call();
        const roundsWithOutWinner = await factory.methods.roundsWithOutWinner().call();
        const data = {
            numberOfBets,
            totalBet: web3.utils.fromWei(totalBet, 'ether'),
            minimumBet: web3.utils.fromWei(minimumBet, 'ether'),
            maxAmountofBets,
            roundsWithOutWinner
        }
        dispatch({ type: types.LOAD_SUMMARY_SUCCESS, data }) ;
    }

};

export function submitBet(bet, numberSelected) {
    return async function (dispatch) {
        dispatch({ type: types.SUBMIT_BET_REQUEST, data: { bet, numberSelected } });

        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.bet(numberSelected).send({
                from: accounts[0],
                value: web3.utils.toWei(bet, 'ether'),
                gas: '1000000'
            })

            dispatch({ type: types.SUBMIT_BET_SUCCESS });

        } catch (err) {
            let error = err.message;
            let data = { error: error, bet: bet, numberSelected: numberSelected };
            if (error === "while converting number to string, invalid number value '', should be a number matching (^-?[0-9.]+).") {
                dispatch({ type: types.SUBMIT_BET_ERROR, data: "Please enter an amount of ether to bet." })
            } else if (error.includes("Returned error: Error: MetaMask Tx Signature: User denied transaction signature")) {
                dispatch({ type: types.SUBMIT_BET_ERROR, data: "User denied transaction." })
            } else {
                dispatch({ type: types.SUBMIT_BET_ERROR, data: error })
            }
        }
    }
};