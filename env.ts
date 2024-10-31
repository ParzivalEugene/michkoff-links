import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    GH_TOKEN: z.string(),
  },
  experimental__runtimeEnv: {},
});
