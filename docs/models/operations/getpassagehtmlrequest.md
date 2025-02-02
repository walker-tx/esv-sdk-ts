# GetPassageHtmlRequest

## Example Usage

```typescript
import { GetPassageHtmlRequest } from "esv-sdk/models/operations";

let value: GetPassageHtmlRequest = {
  q: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               | Example                                                   |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `q`                                                       | *string*                                                  | :heavy_check_mark:                                        | Bible passage reference (e.g., "John 3:16" or "43011016") |                                                           |
| `includePassageReferences`                                | *boolean*                                                 | :heavy_minus_sign:                                        | Include passage references before passages                | true                                                      |
| `includeVerseNumbers`                                     | *boolean*                                                 | :heavy_minus_sign:                                        | Include verse numbers                                     | true                                                      |
| `includeFirstVerseNumbers`                                | *boolean*                                                 | :heavy_minus_sign:                                        | Include the verse number for the first verse of a chapter | true                                                      |
| `includeFootnotes`                                        | *boolean*                                                 | :heavy_minus_sign:                                        | Include callouts to footnotes in the text.                | true                                                      |
| `includeFootnoteBody`                                     | *boolean*                                                 | :heavy_minus_sign:                                        | Include footnote body content                             | true                                                      |
| `includeHeadings`                                         | *boolean*                                                 | :heavy_minus_sign:                                        | Include passage headings                                  | true                                                      |
| `includeShortCopyright`                                   | *boolean*                                                 | :heavy_minus_sign:                                        | Include a short copyright notice                          | false                                                     |
| `includeCopyright`                                        | *boolean*                                                 | :heavy_minus_sign:                                        | Include the full copyright notice                         | false                                                     |
| `includePassageHorizontalLines`                           | *boolean*                                                 | :heavy_minus_sign:                                        | Include horizontal lines between passages                 | false                                                     |
| `includeHeadingHorizontalLines`                           | *boolean*                                                 | :heavy_minus_sign:                                        | Include horizontal lines under headings                   | false                                                     |
| `horizontalLineLength`                                    | *number*                                                  | :heavy_minus_sign:                                        | Length of horizontal lines                                | 55                                                        |
| `includeSelahs`                                           | *boolean*                                                 | :heavy_minus_sign:                                        | Include "Selah" in passage text                           | true                                                      |
| `includeCssLink`                                          | *boolean*                                                 | :heavy_minus_sign:                                        | Include a link to the ESV API CSS file                    |                                                           |
| `inlineStyles`                                            | *boolean*                                                 | :heavy_minus_sign:                                        | Include inline styles on HTML elements                    |                                                           |
| `wrappingDiv`                                             | *boolean*                                                 | :heavy_minus_sign:                                        | Wrap the HTML output in a div with class="esv"            |                                                           |
| `divClasses`                                              | *string*                                                  | :heavy_minus_sign:                                        | Classes to add to the wrapping div                        |                                                           |