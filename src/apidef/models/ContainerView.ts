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

import { AnimationStep } from '../models/AnimationStep';
import { AutomaticLayout } from '../models/AutomaticLayout';
import { Dimensions } from '../models/Dimensions';
import { ElementView } from '../models/ElementView';
import { RelationshipView } from '../models/RelationshipView';

/**
* A container view.
*/
export class ContainerView {
    /**
    * The title of this view (optional).
    */
    'title'?: string;
    /**
    * The description of this view.
    */
    'description'?: string;
    /**
    * A unique identifier for this view.
    */
    'key'?: string;
    /**
    * The ID of the software system this view is associated with.
    */
    'softwareSystemId'?: string;
    /**
    * The paper size that should be used to render this view.
    */
    'paperSize'?: ContainerViewPaperSizeEnum;
    'dimensions'?: Dimensions;
    'automaticLayout'?: AutomaticLayout;
    /**
    * The set of elements in this views.
    */
    'elements'?: Array<ElementView>;
    /**
    * The set of relationships in this views.
    */
    'relationships'?: Array<RelationshipView>;
    /**
    * The set of animation steps (optional).
    */
    'animations'?: Array<AnimationStep>;
    /**
    * Specifies whether software system boundaries should be visible for \"external\" containers (those outside the software system in scope).
    */
    'externalSoftwareSystemBoundariesVisible'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "title",
            "baseName": "title",
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
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "softwareSystemId",
            "baseName": "softwareSystemId",
            "type": "string",
            "format": ""
        },
        {
            "name": "paperSize",
            "baseName": "paperSize",
            "type": "ContainerViewPaperSizeEnum",
            "format": ""
        },
        {
            "name": "dimensions",
            "baseName": "dimensions",
            "type": "Dimensions",
            "format": ""
        },
        {
            "name": "automaticLayout",
            "baseName": "automaticLayout",
            "type": "AutomaticLayout",
            "format": ""
        },
        {
            "name": "elements",
            "baseName": "elements",
            "type": "Array<ElementView>",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "Array<RelationshipView>",
            "format": ""
        },
        {
            "name": "animations",
            "baseName": "animations",
            "type": "Array<AnimationStep>",
            "format": ""
        },
        {
            "name": "externalSoftwareSystemBoundariesVisible",
            "baseName": "externalSoftwareSystemBoundariesVisible",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ContainerView.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ContainerViewPaperSizeEnum {
    A6Portrait = 'A6_Portrait',
    A6Landscape = 'A6_Landscape',
    A5Portrait = 'A5_Portrait',
    A5Landscape = 'A5_Landscape',
    A4Portrait = 'A4_Portrait',
    A4Landscape = 'A4_Landscape',
    A3Portrait = 'A3_Portrait',
    A3Landscape = 'A3_Landscape',
    A2Portrait = 'A2_Portrait',
    A2Landscape = 'A2_Landscape',
    A1Portrait = 'A1_Portrait',
    A1Landscape = 'A1_Landscape',
    A0Portrait = 'A0_Portrait',
    A0Landscape = 'A0_Landscape',
    LetterPortrait = 'Letter_Portrait',
    LetterLandscape = 'Letter_Landscape',
    LegalPortrait = 'Legal_Portrait',
    LegalLandscape = 'Legal_Landscape',
    Slide43 = 'Slide_4_3',
    Slide169 = 'Slide_16_9',
    Slide1610 = 'Slide_16_10'
}

