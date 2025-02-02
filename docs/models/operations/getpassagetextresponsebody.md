# GetPassageTextResponseBody

Successful response

## Example Usage

```typescript
import { GetPassageTextResponseBody } from "esv-sdk/models/operations";

let value: GetPassageTextResponseBody = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `query`                                                                                        | *string*                                                                                       | :heavy_minus_sign:                                                                             | The passage reference that was requested                                                       |
| `canonical`                                                                                    | *string*                                                                                       | :heavy_minus_sign:                                                                             | The canonical version of the passage reference                                                 |
| `parsed`                                                                                       | *number*[][]                                                                                   | :heavy_minus_sign:                                                                             | Array of parsed passage references                                                             |
| `passageMeta`                                                                                  | [operations.GetPassageTextPassageMeta](../../models/operations/getpassagetextpassagemeta.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `passages`                                                                                     | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | Array of formatted passage text                                                                |