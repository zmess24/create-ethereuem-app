import web3 from './web3';
import Casino from './build/Casino.json';

const instance = new web3.eth.Contract(
    JSON.parse(Casino.interface), // Contract interface
    '0x7FbDbCec9Eff141e4588eA4Acbc245A2F26C97fb' // Contract address on network
);

export default instance;