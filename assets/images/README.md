# Photo folders

Replace the placeholder files in these folders with your own photographs.

## Recommended sizes

| Website area | Current file | Recommended crop |
| --- | --- | --- |
| Hero | `hero/hero-photo.svg` | Landscape, 1800 x 1200 or larger |
| Venue | `venue/venue-photo.svg` | Portrait, 1200 x 1500 or larger |
| Gallery 01 | `gallery/gallery-01.svg` | Portrait |
| Gallery 02 | `gallery/gallery-02.svg` | Square |
| Gallery 03 | `gallery/gallery-03.svg` | Landscape |
| Gallery 04 | `gallery/gallery-04.svg` | Square |
| Gallery 05 | `gallery/gallery-05.svg` | Portrait |
| WhatsApp/social preview | `social/og-couple-photo.png` | Landscape, exactly 1200 x 630 |

For easiest replacement, export your pictures as WebP and update the clearly marked `PHOTO PATHS` block at the top of `script.js`, for example:

```js
hero: "assets/images/hero/hero-photo.webp",
```

Use compressed WebP or AVIF images under 500 KB where possible. Update the matching alt text in `index.html` so it accurately describes each photograph.

## WhatsApp share photograph

Replace `social/og-couple-photo.png` with a landscape couple photograph exported at exactly 1200 x 630 pixels. Keep the same filename to avoid changing the metadata.
