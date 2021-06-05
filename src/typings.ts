/**
 * This is the result given to the users 
 * 
 * @public
 */
export interface ImageResult {
    /**
     * URL of the image 
     * 
     * @public
     */
    url: string;
    /**
     * Type of the image
     * @values jpeg | jpg | png | apng | gif 
     * 
     * @public
     */
    type: string;
}

/**
 * This is the result returned from the server 
 * 
 * @public
 */
export interface ApiResult {
    /**
     * The http response code
     */
    code: number;
    /**
     * URL of the image
     */
    url: string;
    /**
     * Mime type (file extension of the internet)
     * example: image/png
     */
    mimeType: string;
    /**
     * Type of the file (image)
     * values: jpeg | jpg | png | gif | apng
     */
    fileType: string;
}

/**
 * options for getting info
 * @private
 */
export interface ReportInputOptions {
    nsfw ?: boolean;
}