<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->