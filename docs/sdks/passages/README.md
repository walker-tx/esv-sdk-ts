# Passages
(*passages*)

## Overview

### Available Operations

* [getHtml](#gethtml) - Get Bible passage HTML
* [getText](#gettext) - Get Bible passage text

## getHtml

Returns Bible passage text with HTML formatting

### Example Usage

```typescript
import { Esv } from "esv-sdk";

const esv = new Esv({
  apiKeyAuth: process.env["ESV_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await esv.passages.getHtml({
    q: "John 1:1",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EsvCore } from "esv-sdk/core.js";
import { passagesGetHtml } from "esv-sdk/funcs/passagesGetHtml.js";

// Use `EsvCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const esv = new EsvCore({
  apiKeyAuth: process.env["ESV_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await passagesGetHtml(esv, {
    q: "John 1:1",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPassageHtmlRequest](../../models/operations/getpassagehtmlrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPassageHtmlResponseBody](../../models/operations/getpassagehtmlresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 401         | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getText

Returns Bible passage text based on the provided query parameters

### Example Usage

```typescript
import { Esv } from "esv-sdk";

const esv = new Esv({
  apiKeyAuth: process.env["ESV_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await esv.passages.getText({
    q: "John 1:1",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EsvCore } from "esv-sdk/core.js";
import { passagesGetText } from "esv-sdk/funcs/passagesGetText.js";

// Use `EsvCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const esv = new EsvCore({
  apiKeyAuth: process.env["ESV_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await passagesGetText(esv, {
    q: "John 1:1",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPassageTextRequest](../../models/operations/getpassagetextrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPassageTextResponseBody](../../models/operations/getpassagetextresponsebody.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 401         | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |