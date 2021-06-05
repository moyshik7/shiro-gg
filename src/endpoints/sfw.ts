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
 * Avatar().then(res => { 
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
 * Avatars().then(res => { 
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
 * Blush().then(res => { 
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
 * get an image / gif of crying
 * 
 * @returns {Promise} A crying gif 
 * @example
 * ```js
 * Cry().then(res => { 
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
 * Hug().then(res => { 
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
 * get an image / gif of kissing 
 */
const Kiss = async (): Promise<ImageResult> => {
    return GetImage('kiss', { nsfw: false })
}
/**
 * get an image / gif of licking
 */
const Lick = async (): Promise<ImageResult> => {
    return GetImage('lick', { nsfw: false })
}
/**
 * get an image / gif of a catgirl 
 */
const Neko = async (): Promise<ImageResult> => {
    return GetImage('neko', { nsfw: false })
}
/**
 * get an image / gif of eating
 * nom: the sound of eating
 */
const Nom = async (): Promise<ImageResult> => {
    return GetImage('nom', { nsfw: false })
}
/**
 * get an image / gif of patting 
 */
const Pat = async (): Promise<ImageResult> => {
    return GetImage('pat', { nsfw: false })
}
/**
 * get an image / gif of poking
 */
const Poke = async (): Promise<ImageResult> => {
    return GetImage('poke', { nsfw: false })
}
/**
 * get an image / gif of pouting 
 */
const Pout = async (): Promise<ImageResult> => {
    return GetImage('pout', { nsfw: false })
}
/**
 * get an image / gif of punching 
 */
const Punch = async (): Promise<ImageResult> => {
    return GetImage('punch', { nsfw: false })
}
/**
 * get an image / gif of slapping
 */
const Slap = async (): Promise<ImageResult> => {
    return GetImage('slap', { nsfw: false })
}
/**
 * get a random image of sleeping
 */
const Sleep = async (): Promise<ImageResult> => {
    return GetImage('sleep', { nsfw: false })
}
/**
 * get a random image of Smugging
 * smug: Facial expression
 */
const Smug = async (): Promise<ImageResult> => {
    return GetImage('smug', { nsfw: false })
}
/**
 * get a random image / gif of tickling
 */
const Tickle = async (): Promise<ImageResult> => {
    return GetImage('tickle', { nsfw: false })
}
/**
 * get a random image of Trap
 * trap: Boy dressed as girl
 */
const Trap = async (): Promise<ImageResult> => {
    return GetImage('trap', { nsfw: false })
}
/**
 * get a random Wallpaper
 */
const Wallpaper = async (): Promise<ImageResult> => {
    return GetImage('wallpapers', { nsfw: false })
}
/**
 * get a random wallpaper
 */
const Wallpapers = async (): Promise<ImageResult> => {
    return GetImage('wallpapers', { nsfw: false })
}


// Exporting all modules
// PascalCase
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
// camelCase
/**
 * @hidden
 */
export {
    /**
     * @hidden 
     */
    Avatar as avatar,
    /**
     * @hidden 
     */
    Avatars as avatars,
    /**
     * @hidden 
     */
    Blush as blush,
    /**
     * @hidden 
     */
    Cry as cry,
    /**
     * @hidden 
     */
    Hug as hug,
    /**
     * @hidden 
     */
    Kiss as kiss,
    /**
     * @hidden 
     */
    Lick as lick,
    /**
     * @hidden 
     */
    Neko as neko,
    /**
     * @hidden 
     */
    Nom as nom,
    /**
     * @hidden 
     */
    Pat as pat,
    /**
     * @hidden 
     */
    Poke as poke,
    /**
     * @hidden 
     */
    Pout as pout,
    /**
     * @hidden 
     */
    Punch as punch,
    /**
     * @hidden 
     */
    Slap as slap,
    /**
     * @hidden 
     */
    Sleep as sleep,
    /**
     * @hidden 
     */
    Smug as smug,
    /**
     * @hidden 
     */
    Tickle as tickle,
    /**
     * @hidden 
     */
    Trap as trap,
    /**
     * @hidden 
     */
    Wallpaper as wallpaper,
    /**
     * @hidden 
     */
    Wallpapers as wallpapers
}