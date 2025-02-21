import { z } from "zod";

import { convertZodSchemaToDocsTemplate } from "@/drivers/webserver/utils/convertZodSchemaToDocsTemplate";

import { tag } from "./constants";

export const authenticatePayloadSchema = z.object({
  login: z.string(),
  password: z.string(),
});

export const authenticateDocSchema = {
  tags: [tag],
  description: `Authenticate`,
  body: convertZodSchemaToDocsTemplate({
    schema: authenticatePayloadSchema,
  }),
};
