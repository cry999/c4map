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

import { HttpHealthCheck } from '../models/HttpHealthCheck';
import { Relationship } from '../models/Relationship';

/**
* An instance of a container, running on a deployment node.
*/
export class ContainerInstance {
    /**
    * The ID of this container instance in the model.
    */
    'id'?: string;
    /**
    * The ID of the container this is an instance of.
    */
    'containerId'?: string;
    /**
    * The number/index of this instance.
    */
    'instanceId'?: number;
    /**
    * The deployment environment in which this container instance resides (e.g. \"Development\", \"Live\", etc).
    */
    'environment'?: string;
    /**
    * A comma separated list of tags associated with this container instance.
    */
    'tags'?: string;
    /**
    * A set of arbitrary name-value properties.
    */
    'properties'?: { [key: string]: any; };
    /**
    * The set of relationships from this container instance to other elements.
    */
    'relationships'?: Array<Relationship>;
    /**
    * The set of HTTP-based health checks for this container instance.
    */
    'healthChecks'?: Array<HttpHealthCheck>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "containerId",
            "baseName": "containerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "instanceId",
            "baseName": "instanceId",
            "type": "number",
            "format": ""
        },
        {
            "name": "environment",
            "baseName": "environment",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
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
            "name": "healthChecks",
            "baseName": "healthChecks",
            "type": "Array<HttpHealthCheck>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ContainerInstance.attributeTypeMap;
    }

    public constructor() {
    }
}
