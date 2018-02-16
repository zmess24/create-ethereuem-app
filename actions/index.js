import * as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';

function loadProjectsRequest(projects) {
    return { type: types.LOAD_PROJECTS_REQUEST, projects };
}

function loadProjectsSuccess(projects) {
    return { type: types.LOAD_PROJECTS_SUCCESS, projects };
}

export const saveMyData = data => {
    const id = 1;
    return { type: types.SAVE_MY_DATA, payload: { [1]: data } };
};

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([1, 2, 3]);
        }, 2000);

    });
}

export  function fetchProjects(){
    return async function (dispatch) {
        // const data = await resolveAfter2Seconds();
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
        dispatch({
            type: types.LOAD_PROJECTS_SUCCESS, data
        }) 
    }
    loadProjectsRequest();
};