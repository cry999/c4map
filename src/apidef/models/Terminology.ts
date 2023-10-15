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
* Provides a way for the terminology on diagrams, etc to be modified (e.g. language translations).
*/
export class Terminology {
    /**
    * The terminology used when rendering the enterprise boundary.
    */
    'enterprise'?: string;
    /**
    * The terminology used when rendering people.
    */
    'person'?: string;
    /**
    * The terminology used when rendering software systems.
    */
    'softwareSystem'?: string;
    /**
    * The terminology used when rendering containers.
    */
    'container'?: string;
    /**
    * The terminology used when rendering components.
    */
    'component'?: string;
    /**
    * The terminology used when rendering code elements.
    */
    'code'?: string;
    /**
    * The terminology used when rendering deployment nodes.
    */
    'deploymentNode'?: string;
    /**
    * The terminology used when rendering relationships.
    */
    'relationship'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "enterprise",
            "baseName": "enterprise",
            "type": "string",
            "format": ""
        },
        {
            "name": "person",
            "baseName": "person",
            "type": "string",
            "format": ""
        },
        {
            "name": "softwareSystem",
            "baseName": "softwareSystem",
            "type": "string",
            "format": ""
        },
        {
            "name": "container",
            "baseName": "container",
            "type": "string",
            "format": ""
        },
        {
            "name": "component",
            "baseName": "component",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "deploymentNode",
            "baseName": "deploymentNode",
            "type": "string",
            "format": ""
        },
        {
            "name": "relationship",
            "baseName": "relationship",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Terminology.attributeTypeMap;
    }

    public constructor() {
    }
}
