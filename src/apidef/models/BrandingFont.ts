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


/**
* Represents a font, including a name and an optional URL for web fonts.
*/
export class BrandingFont {
    /**
    * The font name (e.g. \"Times New Roman\", \"Open Sans\", etc).
    */
    'name'?: string;
    /**
    * For web fonts, the URL where the font can be found.
    */
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": "url"
        }    ];

    static getAttributeTypeMap() {
        return BrandingFont.attributeTypeMap;
    }

    public constructor() {
    }
}

