//Types
import { ImageResult } from './../typings'

//Modules
import { GetImage } from './../resource/res'

/**
 * Get a random avatar
 * 
 * @returns {Promise} An avatar image 
 * @example
 * ```js 
 * shiro.avatar().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const avatar = async (): Promise<ImageResult> => {
    return GetImage('avatars', { nsfw: false })
}
/**
 * Get a random avatar 
 * 
 * @returns {Promise} An avatar image 
 * @example
 * ```js 
 * shiro.avatars().then(res => { 
 *     console.log(res)
 * })
 * ```
 * 
 * @public
 */
const avatars = async (): Promise<ImageResult> => {
    return GetImage('avatars', { nsfw: false })
}
/**
 * Get an image / gif of blushing 
 * 
 * @returns {Promise} A blushing image or gif 
 * @example
 * ```js
 * shiro.blush().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const blush = async (): Promise<ImageResult> => {
    return GetImage('blush', { nsfw: false })
}
/**
 * Get an image / gif of crying
 * 
 * @returns {Promise} A crying gif 
 * @example
 * ```js
 * shiro.cry().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const cry = async (): Promise<ImageResult> => {
    return GetImage('cry', { nsfw: false })
}
/**
 * Get a gif of hugging
 * 
 * @returns {Promise} A hugging image / gif 
 * @example
 * ```js
 * shiro.hug().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const hug = async (): Promise<ImageResult> => {
    return GetImage('hug', { nsfw: false })
}
/**
 * Get a gif of kissing
 * 
 * @returns {Promise} A kissing gif 
 * @example
 * ```js
 * shiro.kiss().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const kiss = async (): Promise<ImageResult> => {
    return GetImage('kiss', { nsfw: false })
}
/**
 * Get a gif of licking
 * 
 * @returns {Promise} A licking gif 
 * @example
 * ```js
 * shiro.lick().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const lick = async (): Promise<ImageResult> => {
    return GetImage('lick', { nsfw: false })
}
/**
 * Get an image of neko / catgirl
 * 
 * @returns {Promise} An image of catgirl
 * @example
 * ```js
 * shiro.neko().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const neko = async (): Promise<ImageResult> => {
    return GetImage('neko', { nsfw: false })
}
/**
 * Get a gif of eating
 * 
 * @returns {Promise} An eating gif 
 * @example
 * ```js
 * shiro.nom().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const nom = async (): Promise<ImageResult> => {
    return GetImage('nom', { nsfw: false })
}
/**
 * Get a gif of patting
 * 
 * @returns {Promise} A patting gif 
 * @example
 * ```js
 * shiro.pat().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const pat = async (): Promise<ImageResult> => {
    return GetImage('pat', { nsfw: false })
}
/**
 * Get a gif of poking
 * 
 * @returns {Promise} A poking gif 
 * @example
 * ```js
 * shiro.poke().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const poke = async (): Promise<ImageResult> => {
    return GetImage('poke', { nsfw: false })
}
/**
 * Get a gif of pouting
 * 
 * @returns {Promise} A pouting gif 
 * @example
 * ```js
 * shiro.pout().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const pout = async (): Promise<ImageResult> => {
    return GetImage('pout', { nsfw: false })
}
/**
 * Get a gif of punching
 * 
 * @returns {Promise} A punching gif 
 * @example
 * ```js
 * shiro.punch().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const punch = async (): Promise<ImageResult> => {
    return GetImage('punch', { nsfw: false })
}
/**
 * Get a gif of slapping
 * 
 * @returns {Promise} A slapping gif 
 * @example
 * ```js
 * shiro.slap().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const slap = async (): Promise<ImageResult> => {
    return GetImage('slap', { nsfw: false })
}
/**
 * Get a gif of sleeping
 * 
 * @returns {Promise} A sleeping gif
 * @example
 * ```js
 * shiro.sleep().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const sleep = async (): Promise<ImageResult> => {
    return GetImage('sleep', { nsfw: false })
}
/**
 * Get a gif of smugging
 * 
 * @returns {Promise} A smug image 
 * @example
 * ```js
 * shiro.smug().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const smug = async (): Promise<ImageResult> => {
    return GetImage('smug', { nsfw: false })
}
/**
 * Get a gif of tickling
 * 
 * @returns {Promise} A tickling gif 
 * @example
 * ```js
 * shiro.tickle().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const tickle = async (): Promise<ImageResult> => {
    return GetImage('tickle', { nsfw: false })
}
/**
 * Get a random image of a trap (Bot dressed as girl)
 * 
 * @returns {Promise} An image of a trap
 * @example
 * ```js
 * shiro.trap().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const trap = async (): Promise<ImageResult> => {
    return GetImage('trap', { nsfw: false })
}
/**
 * Get a random wallpaper
 * 
 * @returns {Promise} A wallpaper
 * @example
 * ```js
 * shiro.wallpaper().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const wallpaper = async (): Promise<ImageResult> => {
    return GetImage('wallpapers', { nsfw: false })
}
/**
 * Get a random wallpaper
 * 
 * @returns {Promise} A wallpaper
 * @example
 * ```js
 * shiro.wallpapers().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const wallpapers = async (): Promise<ImageResult> => {
    return GetImage('wallpapers', { nsfw: false })
}


// Exporting all modules
export {
    avatar,
    avatars,
    blush,
    cry,
    hug,
    kiss,
    lick,
    neko,
    nom,
    pat,
    poke,
    pout,
    punch,
    slap,
    sleep,
    smug,
    tickle,
    trap,
    wallpaper,
    wallpapers
}
