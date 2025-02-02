# PassageResponse

## Example Usage

```typescript
import { PassageResponse } from "esv-sdk/models/components";

let value: PassageResponse = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `query`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | The passage reference that was requested                           |
| `canonical`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | The canonical version of the passage reference                     |
| `parsed`                                                           | *number*[][]                                                       | :heavy_minus_sign:                                                 | Array of parsed passage references                                 |
| `passageMeta`                                                      | [components.PassageMeta](../../models/components/passagemeta.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |
| `passages`                                                         | *string*[]                                                         | :heavy_minus_sign:                                                 | Array of formatted passage text                                    |