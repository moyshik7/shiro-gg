//Types
import { AxiosResponse } from 'axios'
import { ApiResult, ImageResult, ReportInputOptions } from './../typings'

//Modules
import axios from 'axios'

//The base url
const BaseURL = 'https://api.dbot.dev/'

/**
 * gets image from the api 
 * @parameter {__endpoint} string: The endpoint of the api
 * 
 * @example   
 * SFW  
 * ```js
 * GetImage('pat').then(console.log) 
 * //Or, 
 * GetImage('pat', { nsfw: false }).then(console.log) 
 * ``` 
 * NSFW  
 * ```js
 * GetImage('hentai', { nsfw: true }).then(console.log) 
 * ``` 
 * 
 * @private
 */
const GetImage = async (__endpoint: string, __options?: ReportInputOptions): Promise < ImageResult > => {
    return new Promise((resolve: (value: ImageResult) => void, reject) => {
        if (!__endpoint.length) {
            //In case empty string is provided
            const __argErr = new Error('Invalid arguments provided for Api Endpoints')
            __argErr.name = 'ArgumentError'
            reject(__argErr)
        }
        if(!__options){
            // If no options is provided we'll think it's sfw request
            __options = {
                nsfw: false
            }
        }
        let _requestURL: string;
        if(__options.nsfw){
            _requestURL = `${BaseURL}images/nsfw/${__endpoint}`
        } else {
            _requestURL = `${BaseURL}images/${__endpoint}`
        }
        /**
         * URL endpoint format:
         * SFW: https://shiro.gg/api/images/:enpoint
         * NSFW: https://shiro.gg/api/images/nsfw/:endpoint
         */
        axios.get(_requestURL).then((_res: AxiosResponse<ApiResult>): void => {
            // If okay / success
            if (_res.data.code == 200) {
                const result: ImageResult = {
                    url: _res.data.url,
                    type: _res.data.fileType
                }
                resolve(result);
            }
        }).catch((_err: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
            reject(_err)
        })
    });
}

export { GetImage }
