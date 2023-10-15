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
* A documentation section.
*/
export class DocumentationSection {
    /**
    * The Markdown or AsciiDoc content of the section.
    */
    'content'?: string;
    /**
    * The content format type.
    */
    'format'?: DocumentationSectionFormatEnum;
    /**
    * The order (index) of the section in the document.
    */
    'order'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": ""
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "DocumentationSectionFormatEnum",
            "format": ""
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number",
            "format": "integer"
        }    ];

    static getAttributeTypeMap() {
        return DocumentationSection.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum DocumentationSectionFormatEnum {
    Markdown = 'Markdown',
    AsciiDoc = 'AsciiDoc'
}
