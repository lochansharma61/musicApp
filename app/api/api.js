import axios from 'axios';
import { API_HOST } from './constant';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const urlBuilder = (path) => {
	return `${API_HOST}${path}`;
}

const API = {
	users: {
		list: (text) => {
			return axios.get(urlBuilder(`term=${text}`))
			.then((res) => { return res; })
			.catch((err) => { return err; });
        },
		
    }
};

module.exports = API;
