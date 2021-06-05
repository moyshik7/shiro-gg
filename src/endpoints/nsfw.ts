//Types
import { ImageResult } from './../typings'

//Modules
import { GetImage } from './../resource/res'


/**
 * get a random bdsm image
 */
const BDSM = async (): Promise<ImageResult> => {
    return GetImage('bondage', { nsfw: true })
}
/**
 * get a random bondage image
 */
const Bondage = async (): Promise<ImageResult> => {
    return GetImage('bondage', { nsfw: true })
}
/**
 * get a random hentai image
 */
const Hentai = async (): Promise<ImageResult> => {
    return GetImage('hentai', { nsfw: true })
}
/**
 * get a random thigh image
 */
const Thigh = async (): Promise<ImageResult> => {
    return GetImage('thigh', { nsfw: true })
}
/**
 * get a random thigh image
 */
const Thighs = async (): Promise<ImageResult> => {
    return GetImage('thighs', { nsfw: true })
}

// Export all Modules
// PascalCase
export {
    BDSM,
    Bondage,
    Hentai,
    Thigh,
    Thighs
}
// camelCase
export {
    BDSM as bdsm,
    Bondage as bondage,
    Hentai as hentai,
    Thigh as thigh,
    Thighs as thighs
}