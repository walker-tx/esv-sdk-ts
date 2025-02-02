# GetPassageHtmlResponseBody

Successful response

## Example Usage

```typescript
import { GetPassageHtmlResponseBody } from "esv-sdk/models/operations";

let value: GetPassageHtmlResponseBody = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `query`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | The passage reference that was requested                           |
| `canonical`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | The canonical version of the passage reference                     |
| `parsed`                                                           | *number*[][]                                                       | :heavy_minus_sign:                                                 | Array of parsed passage references                                 |
| `passageMeta`                                                      | [operations.PassageMeta](../../models/operations/passagemeta.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |
| `passages`                                                         | *string*[]                                                         | :heavy_minus_sign:                                                 | Array of HTML-formatted passage text                               |