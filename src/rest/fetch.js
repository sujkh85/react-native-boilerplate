//node-fetch support timeout
import NodeFetch from 'node-fetch'

const FETCH_TIMEOUT = {
    MIN:3000,
    SHORT:5000,
    DEFAULT:10000,
    LONG:15000,
    MAX:20000
}

export default {
    post(url, data, timeout) {
        let setting = {};
        setting.method = 'POST';
        setting.headers = {}
        setting.headers["Content-Type"] = 'application/json'
        if (data) {
            setting.body = JSON.stringify(data);
        }
        setting.timeout = timeout ? timeout : FETCH_TIMEOUT.DEFAULT
        return NodeFetch(url, setting).then(
            res => {
                let json = res.json()
                return json;
            }
        )
    },
    get(url, type, timeout) {
        let setting = {};
        setting.method = 'GET';
        setting.headers = {}
        setting.timeout = timeout ? timeout : FETCH_TIMEOUT.DEFAULT
        return NodeFetch(url, setting).then(
            res => {
                let body
                switch (type) {
                    case 'text':
                        body = res.text()
                        break;
                    default:
                        body = res.json()
                }
                return body
            }
        )
    },
    put(url, data, timeout) {
        let setting = {};
        setting.method = 'PUT';
        setting.headers = {}
        setting.headers["Content-Type"] = 'application/json'
        if (data) {
            setting.body = JSON.stringify(data);
        }
        setting.timeout = timeout ? timeout : FETCH_TIMEOUT.DEFAULT
        return NodeFetch(url, setting).then(
            res => {
                return res.json()
            }
        )
    },
    delete(url, timeout) {
        let setting = {};
        setting.method = 'DELETE';
        setting.headers = {}
        setting.headers["Content-Type"] = 'application/json'
        setting.timeout = timeout ? timeout : FETCH_TIMEOUT.DEFAULT
        return NodeFetch(url, setting).then(
            res => {
                return res.json();
            }
        )
    },
    multi(url, data, timeout) {
        let setting = {};
        setting.method = 'POST';
        setting.headers = {}
        if (data) {
            setting.body = data;
        }
        //setting.timeout = timeout ? timeout : FETCH_TIMEOUT.DEFAULT
        return fetch(url, setting).then(
            res => {
                return res.json();
            }
        )
    }
}
