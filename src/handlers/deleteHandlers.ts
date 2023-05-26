import axios from 'axios';
import Cookies from 'js-cookie';

const deleteHandlers = async (URL: string) => {
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
    };
    const response:any = {
        status: 0,
        data: '',
    };
    await axios
        .delete(URL, { headers })
        .then((res) => {
            response.status = 1;
            response.data = res.data;
        })
        .catch((err) => {
            response.status = 0;
            response.data = err.response.data;
        });
    return response;
};

export default deleteHandlers;