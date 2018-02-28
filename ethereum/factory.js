import web3 from './web3';
import Casino from './build/Casino.json';

const instance = new web3.eth.Contract(
    JSON.parse(Casino.interface), // Contract interface
    '0x9Fd46c95C8d47201A1911b0Fa0C0624835e251C1' // Contract address on network
);

export default instance;