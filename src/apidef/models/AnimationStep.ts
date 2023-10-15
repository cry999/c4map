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
* An animation step
*/
export class AnimationStep {
    /**
    * The order of this animation step.
    */
    'order'?: number;
    /**
    * The set of element IDs that should be included in this animation step.
    */
    'elements'?: Array<string>;
    /**
    * The set of relationship IDs that should be included in this animation step.
    */
    'relationships'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "order",
            "baseName": "order",
            "type": "number",
            "format": "integer"
        },
        {
            "name": "elements",
            "baseName": "elements",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AnimationStep.attributeTypeMap;
    }

    public constructor() {
    }
}
