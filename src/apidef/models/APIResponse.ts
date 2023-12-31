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
* An API response.
*/
export class APIResponse {
    /**
    * true if the API call was successful, false otherwise.
    */
    'success'?: boolean;
    /**
    * A human readable response message.
    */
    'message'?: string;
    /**
    * The internal revision number.
    */
    'revision'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return APIResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

