import axios from 'axios';
// axios로 동작하는 데이터를 간단하게 주고 받는 공통 module
export default {
    methods: {
        async $api(url, data) {
            return (await axios({
                method: 'post',
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data;
        }
    }
}