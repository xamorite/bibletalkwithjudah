# bibletalkwithjudah
# bibletalkwithjudah
# bibletalkwithjudah
# bibletalkwithjudah
# bibletalkwithjudah
# bibletalkwithjudah

## Editing the site

The pages load `assets/css/tailwind.css`, a small build that only contains the
Tailwind classes the pages use. After adding or changing Tailwind classes in any
`.html` file, rebuild it (needs Node.js):

```sh
npm install        # first time only
npm run build:css
```

Images are served from `assets/optimized/`. After adding or replacing an image,
regenerate the resized copies (needs ImageMagick):

```sh
./scripts/optimize-images.sh
```
