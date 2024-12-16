import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { heroType } from "./heroType";
import pressKitType from "./pressKitType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, heroType, pressKitType],
};
