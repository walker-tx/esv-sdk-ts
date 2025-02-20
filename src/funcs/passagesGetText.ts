/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { EsvCore } from "../core.js";
import { encodeFormQuery } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Get Bible passage text
 *
 * @remarks
 * Returns Bible passage text based on the provided query parameters
 *
 * @see {@link https://api.esv.org/docs/passage-text/} - Esv.org API Docs for `/v3/passages/text`
 */
export function passagesGetText(
  client: EsvCore,
  request: operations.GetPassageTextRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    components.PassageResponse,
    | errors.ErrorT
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: EsvCore,
  request: operations.GetPassageTextRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      components.PassageResponse,
      | errors.ErrorT
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) => operations.GetPassageTextRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/passage/text/")();

  const query = encodeFormQuery({
    "horizontal-line-length": payload["horizontal-line-length"],
    "include-copyright": payload["include-copyright"],
    "include-first-verse-numbers": payload["include-first-verse-numbers"],
    "include-footnote-body": payload["include-footnote-body"],
    "include-footnotes": payload["include-footnotes"],
    "include-heading-horizontal-lines":
      payload["include-heading-horizontal-lines"],
    "include-headings": payload["include-headings"],
    "include-passage-horizontal-lines":
      payload["include-passage-horizontal-lines"],
    "include-passage-references": payload["include-passage-references"],
    "include-selahs": payload["include-selahs"],
    "include-short-copyright": payload["include-short-copyright"],
    "include-verse-numbers": payload["include-verse-numbers"],
    "indent-declares": payload["indent-declares"],
    "indent-paragraphs": payload["indent-paragraphs"],
    "indent-poetry": payload["indent-poetry"],
    "indent-poetry-lines": payload["indent-poetry-lines"],
    "indent-psalm-doxology": payload["indent-psalm-doxology"],
    "indent-using": payload["indent-using"],
    "line-length": payload["line-length"],
    "q": payload.query,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "getPassageText",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiKey,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    components.PassageResponse,
    | errors.ErrorT
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, components.PassageResponse$inboundSchema),
    M.jsonErr([400, 401], errors.ErrorT$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
