# Resolve-url-loader Issue

When I run this webpack configuration, I see that resolve loader is finding the right url() and its path, but debug mode is saying NOT FOUND.

## Package Details
➜  webpack_playground git:(resolve_url_loader_issue) ✗ npm ls sass-loader resolve-url-loader postcss-loader css-loader style-loader mini-css-extract-plugin node-sass file-loader webpack
├── css-loader@0.28.11
├── file-loader@1.1.11
├── mini-css-extract-plugin@0.4.0
├── node-sass@4.8.3
├── postcss-loader@2.1.3
├── resolve-url-loader@2.3.0
├── sass-loader@6.0.7
├── style-loader@0.20.3
└── webpack@4.5.0

## Instructions
`npm install`

`npm run build`

Look at the output of main-[hash].css

### Expected

```css
span.arrow {
  background: url(/static/img/audiences-[hash].png);
}
```

### Actual
```css
span.arrow {
  background: url(/static/img/audiences.png);
}
```

Debugging output from resolve-url-loader:


```bash
➜  webpack_playground git:(resolve_url_loader_issue) ✗ npm run build
> webpack


resolve-url-loader: /static/img/audiences.png
  /Users/usr1/webpack_playground/src
  /Users/usr1/webpack_playground/static/img
  NOT FOUND

Hash: 11aa8584aa26c921d549
Version: webpack 4.5.0
Time: 882ms
Built at: 4/12/2018 9:15:06 AM
                            Asset       Size  Chunks             Chunk Names
    main-ca776d1e2c904d53b3f6.css  120 bytes    main  [emitted]  main
                          main.js   2.87 KiB    main  [emitted]  main
main-ca776d1e2c904d53b3f6.css.map  338 bytes    main  [emitted]  main
                      main.js.map   2.63 KiB    main  [emitted]  main
```
