# SearchPassagesResponseBody

Successful response

## Example Usage

```typescript
import { SearchPassagesResponseBody } from "esv-sdk/models/operations";

let value: SearchPassagesResponseBody = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `page`                                                     | *number*                                                   | :heavy_minus_sign:                                         | Current page number                                        |
| `totalPages`                                               | *number*                                                   | :heavy_minus_sign:                                         | Total number of pages                                      |
| `totalResults`                                             | *number*                                                   | :heavy_minus_sign:                                         | Total number of results                                    |
| `results`                                                  | [operations.Results](../../models/operations/results.md)[] | :heavy_minus_sign:                                         | N/A                                                        |