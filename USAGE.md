<!-- Start SDK Example Usage [usage] -->
```typescript
import { Esv } from "esv-sdk";

const esv = new Esv({
  apiKey: process.env["ESV_API_KEY"] ?? "",
});

async function run() {
  const result = await esv.passages.search({
    query: "<value>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End SDK Example Usage [usage] -->