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
* Represents a view on top of a view, which can be used to include or exclude specific elements.
*/
export class FilteredView {
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
    * The key of the view on which this filtered view is based.
    */
    'baseViewKey'?: string;
    /**
    * Whether elements/relationships are being included or excluded based upon the set of tags.
    */
    'mode'?: FilteredViewModeEnum;
    /**
    * The set of tags to include/exclude elements/relationships when rendering this filtered view.
    */
    'tags'?: Array<string>;

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
            "name": "baseViewKey",
            "baseName": "baseViewKey",
            "type": "string",
            "format": ""
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "FilteredViewModeEnum",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FilteredView.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum FilteredViewModeEnum {
    Include = 'Include',
    Exclude = 'Exclude'
}
