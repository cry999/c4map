/**
 * Structurizr
 * The web API for Structurizr.
 *
 * OpenAPI spec version: 1.26.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BrandingFont } from '../models/BrandingFont';

/**
* A wrapper for the font and logo for diagram/documentation branding purposes.
*/
export class Branding {
    /**
    * A Base64 data URI representation of a PNG/JPG/GIF file.
    */
    'logo'?: string;
    'font'?: BrandingFont;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "logo",
            "baseName": "logo",
            "type": "string",
            "format": "url"
        },
        {
            "name": "font",
            "baseName": "font",
            "type": "BrandingFont",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Branding.attributeTypeMap;
    }

    public constructor() {
    }
}

