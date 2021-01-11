// export const FMODModule = require("./fmodstudio.js");

import FMODModule from "./fmodstudio.js";
import { newFetchFunction } from "./newFetchFunction.js";

window.fetchWasm = newFetchFunction //needed for fmod wasm file loading on android devices
WebAssembly.instantiateStreaming = undefined //probably needed for fmod wasm file loading on android devices

export const FMODModule

console.log("Hello World", FMODModule);

//at this point in time, I added .wasm file to "assets/audio/"