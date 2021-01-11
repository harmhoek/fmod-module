I hope FMOD releases their own npm module.

QUICK GUIDE
Put your .wasm file from fmod version 2.01.07 in your /assets/audio/ directory

DETAILED GUIDE
What I changed to get it to work:

1. The wasm directory, it's hardcoded to /assets/audio/ , meaning your fmodstudio.wasm should be accessible in localhost/assets/audio/
   change on every update: to `return scriptDirectory+path` to `return scriptDirectory+"assets/audio/"+path`
2. I changed fetch function to fetchWasm to make sure that Cordova can load wasm files in Android devices
   change on every update: `fetch` to `fetchWasm`
