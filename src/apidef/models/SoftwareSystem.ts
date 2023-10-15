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

import { Container } from '../models/Container';
import { Documentation } from '../models/Documentation';
import { Relationship } from '../models/Relationship';

/**
* A software system.
*/
export class SoftwareSystem {
    /**
    * The ID of this software system in the model.
    */
    'id'?: string;
    /**
    * The name of this software system.
    */
    'name'?: string;
    /**
    * A short description of this software system.
    */
    'description'?: string;
    /**
    * The location of this software system.
    */
    'location'?: SoftwareSystemLocationEnum;
    /**
    * A comma separated list of tags associated with this software system.
    */
    'tags'?: string;
    /**
    * The URL where more information about this element can be found.
    */
    'url'?: string;
    /**
    * The set of containers within this software system.
    */
    'containers'?: Array<Container>;
    /**
    * The name of the group in which this software system should be included in.
    */
    'group'?: string;
    /**
    * A set of arbitrary name-value properties.
    */
    'properties'?: { [key: string]: any; };
    /**
    * The set of relationships from this software system to other elements.
    */
    'relationships'?: Array<Relationship>;
    'documentation'?: Documentation;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "SoftwareSystemLocationEnum",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "containers",
            "baseName": "containers",
            "type": "Array<Container>",
            "format": ""
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "string",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "Array<Relationship>",
            "format": ""
        },
        {
            "name": "documentation",
            "baseName": "documentation",
            "type": "Documentation",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SoftwareSystem.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum SoftwareSystemLocationEnum {
    External = 'External',
    Internal = 'Internal',
    Unspecified = 'Unspecified'
}
