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
* The enterprise associated with this model.
*/
export class ModelEnterprise {
    /**
    * The name of the enterprise.
    */
    'name'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelEnterprise.attributeTypeMap;
    }

    public constructor() {
    }
}
