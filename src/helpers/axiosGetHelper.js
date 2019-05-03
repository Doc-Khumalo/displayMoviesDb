import axios from 'axios';

/*
    axios get function;
    returns a promise to be handled inside parent component

    ******************** Usage ****************************
    import helper and pass url plus parameter to be sent
* */


export default (url, params) => axios.get(url, { params } )