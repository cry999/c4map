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
* The X, Y coordinate of a bend in a line.
*/
export class Vertex {
  /**
  * The horizontal position of the vertex when rendered.
  */
  'x'?: number;
  /**
  * The vertical position of the vertex when rendered.
  */
  'y'?: number;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
    {
      "name": "x",
      "baseName": "x",
      "type": "number",
      "format": "integer"
    },
    {
      "name": "y",
      "baseName": "y",
      "type": "number",
      "format": "integer"
    }];

  static getAttributeTypeMap() {
    return Vertex.attributeTypeMap;
  }

  public constructor() {
  }
}
