import { RequestInput } from "../../lib/http.js";
import {
  BeforeCreateRequestContext,
  BeforeCreateRequestHook,
} from "../types.js";

export class PrefixApiKeyHook implements BeforeCreateRequestHook {
  prefix = "Token";

  beforeCreateRequest(ctx: BeforeCreateRequestContext, input: RequestInput) {
    const token = ctx.resolvedSecurity?.headers["Authorization"];

    if (token?.startsWith(this.prefix)) return input;

    input.options = {
      ...input.options,
      headers: {
        ...input.options?.headers,
        Authorization: `Token ${token}`,
      },
    };

    return input;
  }
}
