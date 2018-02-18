import web3 from './web3';
import Casino from './build/Casino.json';

const instance = new web3.eth.Contract(
    JSON.parse(Casino.interface), // Contract interface
    '0xE05D589189F9F11366E7BBA8B0A2E4c6cA6cd856' // Contract address on network
);

export default instance;