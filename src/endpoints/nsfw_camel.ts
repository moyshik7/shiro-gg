//Types
import { ImageResult } from './../typings'

//Modules
import { GetImage } from './../resource/res'


/**
 * Get a BDSM image or gif 
 * 
 * @returns {Promise} A bdsm image or gif 
 * @example
 * ```js
 * shiro.bdsm().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const bdsm = async (): Promise<ImageResult> => {
    return GetImage('bondage', { nsfw: true })
}
/**
 * Get a bondage image or gif 
 * 
 * @returns {Promise} A bondage image or gif 
 * @example
 * ```js
 * shiro.bondage().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const bondage = async (): Promise<ImageResult> => {
    return GetImage('bondage', { nsfw: true })
}
/**
 * Get a hentai image or gif 
 * 
 * @returns {Promise} A hentai image or gif 
 * @example
 * ```js
 * shiro.hentai().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const hentai = async (): Promise<ImageResult> => {
    return GetImage('hentai', { nsfw: true })
}
/**
 * Get a Thigh image 
 * Thigh: Part of legs
 * 
 * @returns {Promise} A thigh image or gif 
 * @example
 * ```js
 * shiro.thigh().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const thigh = async (): Promise<ImageResult> => {
    return GetImage('thigh', { nsfw: true })
}
/**
 * Get a Thigh image 
 * Thigh: Part of legs
 * 
 * @returns {Promise} A thigh image or gif 
 * @example
 * ```js
 * shiro.thighs().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const thighs = async (): Promise<ImageResult> => {
    return GetImage('thighs', { nsfw: true })
}

// Export all Modules
export {
    bdsm,
    bondage,
    hentai,
    thigh,
    thighs
}