# SearchPassagesRequest

## Example Usage

```typescript
import { SearchPassagesRequest } from "esv-sdk/models/operations";

let value: SearchPassagesRequest = {
  query: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `query`                              | *string*                             | :heavy_check_mark:                   | The text to search for               |
| `pageSize`                           | *number*                             | :heavy_minus_sign:                   | Number of results to return per page |
| `page`                               | *number*                             | :heavy_minus_sign:                   | Page number to return                |