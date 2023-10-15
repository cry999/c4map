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

import { Branding } from '../models/Branding';
import { ConfigurationStyles } from '../models/ConfigurationStyles';
import { Terminology } from '../models/Terminology';

/**
* The configuration associated with a set of views.
*/
export class Configuration {
    'styles'?: ConfigurationStyles;
    /**
    * The key of the view that was saved most recently.
    */
    'lastSavedView'?: string;
    /**
    * The key of the view that should be shown by default.
    */
    'defaultView'?: string;
    /**
    * The URL(s) of the theme(s) to be used when rendering diagrams.
    */
    'themes'?: Array<string>;
    'branding'?: Branding;
    'terminology'?: Terminology;
    /**
    * The type of symbols to use when rendering metadata.
    */
    'metadataSymbols'?: ConfigurationMetadataSymbolsEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "styles",
            "baseName": "styles",
            "type": "ConfigurationStyles",
            "format": ""
        },
        {
            "name": "lastSavedView",
            "baseName": "lastSavedView",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultView",
            "baseName": "defaultView",
            "type": "string",
            "format": ""
        },
        {
            "name": "themes",
            "baseName": "themes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "branding",
            "baseName": "branding",
            "type": "Branding",
            "format": ""
        },
        {
            "name": "terminology",
            "baseName": "terminology",
            "type": "Terminology",
            "format": ""
        },
        {
            "name": "metadataSymbols",
            "baseName": "metadataSymbols",
            "type": "ConfigurationMetadataSymbolsEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Configuration.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ConfigurationMetadataSymbolsEnum {
    SquareBrackets = 'SquareBrackets,',
    RoundBrackets = 'RoundBrackets,',
    CurlyBrackets = 'CurlyBrackets,',
    AngleBrackets = 'AngleBrackets,',
    DoubleAngleBrackets = 'DoubleAngleBrackets,',
    None = 'None'
}

