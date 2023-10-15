export * from '../models/APIResponse';
export * from '../models/AnimationStep';
export * from '../models/AutomaticLayout';
export * from '../models/Branding';
export * from '../models/BrandingFont';
export * from '../models/Component';
export * from '../models/ComponentView';
export * from '../models/Configuration';
export * from '../models/ConfigurationStyles';
export * from '../models/Container';
export * from '../models/ContainerInstance';
export * from '../models/ContainerView';
export * from '../models/Decision';
export * from '../models/DeploymentNode';
export * from '../models/DeploymentView';
export * from '../models/Dimensions';
export * from '../models/Documentation';
export * from '../models/DocumentationSection';
export * from '../models/DynamicView';
export * from '../models/ElementStyle';
export * from '../models/ElementView';
export * from '../models/FilteredView';
export * from '../models/HttpHealthCheck';
export * from '../models/Image';
export * from '../models/InfrastructureNode';
export * from '../models/Model';
export * from '../models/ModelEnterprise';
export * from '../models/Person';
export * from '../models/Relationship';
export * from '../models/RelationshipStyle';
export * from '../models/RelationshipView';
export * from '../models/SoftwareSystem';
export * from '../models/SoftwareSystemInstance';
export * from '../models/SystemContextView';
export * from '../models/SystemLandscapeView';
export * from '../models/Terminology';
export * from '../models/User';
export * from '../models/Vertex';
export * from '../models/Views';
export * from '../models/Workspace';
export * from '../models/WorkspaceConfiguration';

import { APIResponse } from '../models/APIResponse';
import { AnimationStep } from '../models/AnimationStep';
import { AutomaticLayout } from '../models/AutomaticLayout';
import { Branding } from '../models/Branding';
import { BrandingFont } from '../models/BrandingFont';
import { Component } from '../models/Component';
import { ComponentView } from '../models/ComponentView';
import { Configuration } from '../models/Configuration';
import { ConfigurationStyles } from '../models/ConfigurationStyles';
import { Container } from '../models/Container';
import { ContainerInstance } from '../models/ContainerInstance';
import { ContainerView } from '../models/ContainerView';
import { Decision } from '../models/Decision';
import { DeploymentNode } from '../models/DeploymentNode';
import { DeploymentView } from '../models/DeploymentView';
import { Dimensions } from '../models/Dimensions';
import { Documentation } from '../models/Documentation';
import { DocumentationSection } from '../models/DocumentationSection';
import { DynamicView } from '../models/DynamicView';
import { ElementStyle } from '../models/ElementStyle';
import { ElementView } from '../models/ElementView';
import { FilteredView } from '../models/FilteredView';
import { HttpHealthCheck } from '../models/HttpHealthCheck';
import { Image } from '../models/Image';
import { InfrastructureNode } from '../models/InfrastructureNode';
import { Model } from '../models/Model';
import { ModelEnterprise } from '../models/ModelEnterprise';
import { Person } from '../models/Person';
import { Relationship } from '../models/Relationship';
import { RelationshipStyle } from '../models/RelationshipStyle';
import { RelationshipView } from '../models/RelationshipView';
import { SoftwareSystem } from '../models/SoftwareSystem';
import { SoftwareSystemInstance } from '../models/SoftwareSystemInstance';
import { SystemContextView } from '../models/SystemContextView';
import { SystemLandscapeView } from '../models/SystemLandscapeView';
import { Terminology } from '../models/Terminology';
import { User } from '../models/User';
import { Vertex } from '../models/Vertex';
import { Views } from '../models/Views';
import { Workspace } from '../models/Workspace';
import { WorkspaceConfiguration } from '../models/WorkspaceConfiguration';

/* tslint:disable:no-unused-variable */
let primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
  "any"
];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/json-patch+json": 1,
  "application/merge-patch+json": 1,
  "application/strategic-merge-patch+json": 1,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
  "AutomaticLayoutRankDirectionEnum",
  "ComponentViewPaperSizeEnum",
  "ConfigurationMetadataSymbolsEnum",
  "ContainerViewPaperSizeEnum",
  "DecisionStatusEnum",
  "DecisionFormatEnum",
  "DeploymentViewPaperSizeEnum",
  "DocumentationSectionFormatEnum",
  "DynamicViewPaperSizeEnum",
  "ElementStyleShapeEnum",
  "ElementStyleBorderEnum",
  "FilteredViewModeEnum",
  "PersonLocationEnum",
  "RelationshipInteractionStyleEnum",
  "RelationshipStyleRoutingEnum",
  "RelationshipViewRoutingEnum",
  "SoftwareSystemLocationEnum",
  "SystemContextViewPaperSizeEnum",
  "SystemLandscapeViewPaperSizeEnum",
  "UserRoleEnum",
  "WorkspaceConfigurationVisibilityEnum",
]);

let typeMap: { [index: string]: any } = {
  "APIResponse": APIResponse,
  "AnimationStep": AnimationStep,
  "AutomaticLayout": AutomaticLayout,
  "Branding": Branding,
  "BrandingFont": BrandingFont,
  "Component": Component,
  "ComponentView": ComponentView,
  "Configuration": Configuration,
  "ConfigurationStyles": ConfigurationStyles,
  "Container": Container,
  "ContainerInstance": ContainerInstance,
  "ContainerView": ContainerView,
  "Decision": Decision,
  "DeploymentNode": DeploymentNode,
  "DeploymentView": DeploymentView,
  "Dimensions": Dimensions,
  "Documentation": Documentation,
  "DocumentationSection": DocumentationSection,
  "DynamicView": DynamicView,
  "ElementStyle": ElementStyle,
  "ElementView": ElementView,
  "FilteredView": FilteredView,
  "HttpHealthCheck": HttpHealthCheck,
  "Image": Image,
  "InfrastructureNode": InfrastructureNode,
  "Model": Model,
  "ModelEnterprise": ModelEnterprise,
  "Person": Person,
  "Relationship": Relationship,
  "RelationshipStyle": RelationshipStyle,
  "RelationshipView": RelationshipView,
  "SoftwareSystem": SoftwareSystem,
  "SoftwareSystemInstance": SoftwareSystemInstance,
  "SystemContextView": SystemContextView,
  "SystemLandscapeView": SystemLandscapeView,
  "Terminology": Terminology,
  "User": User,
  "Vertex": Vertex,
  "Views": Views,
  "Workspace": Workspace,
  "WorkspaceConfiguration": WorkspaceConfiguration,
}

export class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string) {
    if (data == undefined) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === "Date") {
      return expectedType;
    } else {
      if (enumsMap.has(expectedType)) {
        return expectedType;
      }

      if (!typeMap[expectedType]) {
        return expectedType; // w/e we don't know the type
      }

      // Check the discriminator
      let discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty == null) {
        return expectedType; // the type does not have a discriminator. use it.
      } else {
        if (data[discriminatorProperty]) {
          var discriminatorType = data[discriminatorProperty];
          if (typeMap[discriminatorType]) {
            return discriminatorType; // use the type given in the discriminator
          } else {
            return expectedType; // discriminator did not map to a type
          }
        } else {
          return expectedType; // discriminator was not present (or an empty string)
        }
      }
    }
  }

  public static serialize(data: any, type: string, format: string) {
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let date of data) {
        transformedData.push(ObjectSerializer.serialize(date, subType, format));
      }
      return transformedData;
    } else if (type === "Date") {
      if (format == "date") {
        let month = data.getMonth() + 1
        month = month < 10 ? "0" + month.toString() : month.toString()
        let day = data.getDate();
        day = day < 10 ? "0" + day.toString() : day.toString();

        return data.getFullYear() + "-" + month + "-" + day;
      } else {
        return data.toISOString();
      }
    } else {
      if (enumsMap.has(type)) {
        return data;
      }
      if (!typeMap[type]) { // in case we dont know the type
        return data;
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      let instance: { [index: string]: any } = {};
      for (let attributeType of attributeTypes) {
        instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string, format: string) {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      let transformedData: any[] = [];
      for (let date of data) {
        transformedData.push(ObjectSerializer.deserialize(date, subType, format));
      }
      return transformedData;
    } else if (type === "Date") {
      return new Date(data);
    } else {
      if (enumsMap.has(type)) {// is Enum
        return data;
      }

      if (!typeMap[type]) { // dont know the type
        return data;
      }
      let instance = new typeMap[type]();
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      for (let attributeType of attributeTypes) {
        let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
        if (value !== undefined) {
          instance[attributeType.name] = value;
        }
      }
      return instance;
    }
  }


  /**
   * Normalize media type
   *
   * We currently do not handle any media types attributes, i.e. anything
   * after a semicolon. All content is assumed to be UTF-8 compatible.
   */
  public static normalizeMediaType(mediaType: string | undefined): string | undefined {
    if (mediaType === undefined) {
      return undefined;
    }
    return mediaType.split(";")[0].trim().toLowerCase();
  }

  /**
   * From a list of possible media types, choose the one we can handle best.
   *
   * The order of the given media types does not have any impact on the choice
   * made.
   */
  public static getPreferredMediaType(mediaTypes: Array<string>): string {
    /** According to OAS 3 we should default to json */
    if (mediaTypes.length === 0) {
      return "application/json";
    }

    const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
    let selectedMediaType: string | undefined = undefined;
    let selectedRank: number = -Infinity;
    for (const mediaType of normalMediaTypes) {
      if (supportedMediaTypes[mediaType!] > selectedRank) {
        selectedMediaType = mediaType;
        selectedRank = supportedMediaTypes[mediaType!];
      }
    }

    if (selectedMediaType === undefined) {
      throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    return selectedMediaType!;
  }

  /**
   * Convert data to a string according the given media type
   */
  public static stringify(data: any, mediaType: string): string {
    if (mediaType === "text/plain") {
      return String(data);
    }

    if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
      return JSON.stringify(data);
    }

    throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
  }

  /**
   * Parse data from a string according to the given media type
   */
  public static parse(rawData: string, mediaType: string | undefined) {
    if (mediaType === undefined) {
      throw new Error("Cannot parse content. No Content-Type defined.");
    }

    if (mediaType === "text/plain") {
      return rawData;
    }

    if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
      return JSON.parse(rawData);
    }

    if (mediaType === "text/html") {
      return rawData;
    }

    throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
  }
}
