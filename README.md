I hope FMOD releases their own npm module.

Please help me get this to work as a npm module.

What I changed to get it to work:

1. The wasm directory, it's hardcoded to /assets/ , meaning your fmodstudio.wasm should be accessible in localhost/assets/
   look for code: return scriptDirectory+"assets/audio/"+path
2. I changed fetch function to fetchWasm to make sure that Cordova can load wasm files in Android devices
   look for code: fetch to fetchWasm
