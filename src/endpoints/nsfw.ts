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
 * shiro.BDSM().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const BDSM = async (): Promise<ImageResult> => {
    return GetImage('bondage', { nsfw: true })
}
/**
 * Get a bondage image or gif 
 * 
 * @returns {Promise} A bondage image or gif 
 * @example
 * ```js
 * shiro.Bondage().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Bondage = async (): Promise<ImageResult> => {
    return GetImage('bondage', { nsfw: true })
}
/**
 * Get a hentai image or gif 
 * 
 * @returns {Promise} A hentai image or gif 
 * @example
 * ```js
 * shiro.Hentai().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Hentai = async (): Promise<ImageResult> => {
    return GetImage('hentai', { nsfw: true })
}
/**
 * Get a Thigh image 
 * Thigh: Part of legs
 * 
 * @returns {Promise} A thigh image or gif 
 * @example
 * ```js
 * shiro.Thigh().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Thigh = async (): Promise<ImageResult> => {
    return GetImage('thigh', { nsfw: true })
}
/**
 * Get a Thigh image 
 * Thigh: Part of legs
 * 
 * @returns {Promise} A thigh image or gif 
 * @example
 * ```js
 * shiro.Thighs().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Thighs = async (): Promise<ImageResult> => {
    return GetImage('thighs', { nsfw: true })
}

// Export all Modules
export {
    BDSM,
    Bondage,
    Hentai,
    Thigh,
    Thighs
}
