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
 * shiro.Avatar().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Avatar = async (): Promise<ImageResult> => {
    return GetImage('avatars', { nsfw: false })
}
/**
 * Get a random avatar 
 * 
 * @returns {Promise} An avatar image 
 * @example
 * ```js 
 * shiro.Avatars().then(res => { 
 *     console.log(res)
 * })
 * ```
 * 
 * @public
 */
const Avatars = async (): Promise<ImageResult> => {
    return GetImage('avatars', { nsfw: false })
}
/**
 * Get an image / gif of blushing 
 * 
 * @returns {Promise} A blushing image or gif 
 * @example
 * ```js
 * shiro.Blush().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Blush = async (): Promise<ImageResult> => {
    return GetImage('blush', { nsfw: false })
}
/**
 * Get an image / gif of crying
 * 
 * @returns {Promise} A crying gif 
 * @example
 * ```js
 * shiro.Cry().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Cry = async (): Promise<ImageResult> => {
    return GetImage('cry', { nsfw: false })
}
/**
 * Get a gif of hugging
 * 
 * @returns {Promise} A hugging image / gif 
 * @example
 * ```js
 * shiro.Hug().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Hug = async (): Promise<ImageResult> => {
    return GetImage('hug', { nsfw: false })
}
/**
 * Get a gif of kissing
 * 
 * @returns {Promise} A kissing gif 
 * @example
 * ```js
 * shiro.Kiss().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Kiss = async (): Promise<ImageResult> => {
    return GetImage('kiss', { nsfw: false })
}
/**
 * Get a gif of licking
 * 
 * @returns {Promise} A licking gif 
 * @example
 * ```js
 * shiro.Lick().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Lick = async (): Promise<ImageResult> => {
    return GetImage('lick', { nsfw: false })
}
/**
 * Get an image of neko / catgirl
 * 
 * @returns {Promise} An image of catgirl
 * @example
 * ```js
 * shiro.Neko().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Neko = async (): Promise<ImageResult> => {
    return GetImage('neko', { nsfw: false })
}
/**
 * Get a gif of eating
 * 
 * @returns {Promise} An eating gif 
 * @example
 * ```js
 * shiro.Nom().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Nom = async (): Promise<ImageResult> => {
    return GetImage('nom', { nsfw: false })
}
/**
 * Get a gif of patting
 * 
 * @returns {Promise} A patting gif 
 * @example
 * ```js
 * shiro.Pat().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Pat = async (): Promise<ImageResult> => {
    return GetImage('pat', { nsfw: false })
}
/**
 * Get a gif of poking
 * 
 * @returns {Promise} A poking gif 
 * @example
 * ```js
 * shiro.Poke().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Poke = async (): Promise<ImageResult> => {
    return GetImage('poke', { nsfw: false })
}
/**
 * Get a gif of pouting
 * 
 * @returns {Promise} A pouting gif 
 * @example
 * ```js
 * shiro.Pout().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Pout = async (): Promise<ImageResult> => {
    return GetImage('pout', { nsfw: false })
}
/**
 * Get a gif of punching
 * 
 * @returns {Promise} A punching gif 
 * @example
 * ```js
 * shiro.Punch().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Punch = async (): Promise<ImageResult> => {
    return GetImage('punch', { nsfw: false })
}
/**
 * Get a gif of slapping
 * 
 * @returns {Promise} A slapping gif 
 * @example
 * ```js
 * shiro.Slap().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Slap = async (): Promise<ImageResult> => {
    return GetImage('slap', { nsfw: false })
}
/**
 * Get a gif of sleeping
 * 
 * @returns {Promise} A sleeping gif
 * @example
 * ```js
 * shiro.Sleep().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Sleep = async (): Promise<ImageResult> => {
    return GetImage('sleep', { nsfw: false })
}
/**
 * Get a gif of smugging
 * 
 * @returns {Promise} A smug image 
 * @example
 * ```js
 * shiro.Smug().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Smug = async (): Promise<ImageResult> => {
    return GetImage('smug', { nsfw: false })
}
/**
 * Get a gif of tickling
 * 
 * @returns {Promise} A tickling gif 
 * @example
 * ```js
 * shiro.Tickle().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Tickle = async (): Promise<ImageResult> => {
    return GetImage('tickle', { nsfw: false })
}
/**
 * Get a random image of a trap (Bot dressed as girl)
 * 
 * @returns {Promise} An image of a trap
 * @example
 * ```js
 * shiro.Trap().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Trap = async (): Promise<ImageResult> => {
    return GetImage('trap', { nsfw: false })
}
/**
 * Get a random wallpaper
 * 
 * @returns {Promise} A wallpaper
 * @example
 * ```js
 * shiro.Wallpaper().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Wallpaper = async (): Promise<ImageResult> => {
    return GetImage('wallpapers', { nsfw: false })
}
/**
 * Get a random wallpaper
 * 
 * @returns {Promise} A wallpaper
 * @example
 * ```js
 * shiro.Wallpapers().then(res => { 
 *     console.log(res) 
 * })
 * ```
 *
 * @public
 */
const Wallpapers = async (): Promise<ImageResult> => {
    return GetImage('wallpapers', { nsfw: false })
}


// Exporting all modules
export {
    Avatar,
    Avatars,
    Blush,
    Cry,
    Hug,
    Kiss,
    Lick,
    Neko,
    Nom,
    Pat,
    Poke,
    Pout,
    Punch,
    Slap,
    Sleep,
    Smug,
    Tickle,
    Trap,
    Wallpaper,
    Wallpapers
}
