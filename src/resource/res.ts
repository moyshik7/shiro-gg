//Types
import { AxiosResponse } from 'axios'
import { ApiResult, ImageResult } from './../typings'

//Modules
import axios from 'axios'

//The base url
const BaseURL = 'https://shiro.gg/api/'

const GetImage = async (__endpoint: string): Promise < ImageResult > => {
    return new Promise((resolve: any, reject: any) => {
        if (!__endpoint.length) {
            //In case empty string is provided
            const __argerr = new Error('Invalid arguments provided for Api Endpoints')
            __argerr.name = 'ArgumentError'
            reject(__argerr)
        }
        /**
         * URL endpoint format:
         * SFW: https://shiro.gg/api/images/:enpoint
         * NSFW: https://shiro.gg/api/images/nsfw/:endpoint
         */
        axios.get(`${BaseURL}images/${__endpoint}`).then((_res: AxiosResponse <ApiResult>): void => {
            if (_res.data.code == 200) {
                const result: ImageResult = {
                    url: _res.data.url,
                    type: _res.data.fileType
                }
                resolve(result);
            }
        }).catch((_err: any) => {
            reject(_err)
        })
    });
}

export { GetImage }

/*
ToDo:
- Add support for nsfw
- Add new imput type options
- {
    nsfw?: boolean;
}
*/