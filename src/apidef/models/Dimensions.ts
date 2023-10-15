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
* Represents a width and height pair.
*/
export class Dimensions {
    /**
    * The width (pixels).
    */
    'width'?: number;
    /**
    * The height (pixels).
    */
    'height'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": "integer"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "integer"
        }    ];

    static getAttributeTypeMap() {
        return Dimensions.attributeTypeMap;
    }

    public constructor() {
    }
}

