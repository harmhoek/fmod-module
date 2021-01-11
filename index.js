// export const FMODModule = require("./fmodstudio.js");

import FMODModule from "./fmodstudio.js";
import { newFetchFunction } from "./newFetchFunction.js";

export const FMODModule

window.fetchWasm = newFetchFunction //needed for fmod wasm file loading on android devices
WebAssembly.instantiateStreaming = undefined //probably needed for fmod wasm file loading on android devices

console.log("Hello World", FMODModule);

//at this point in time, I added .wasm file to "assets/audio/"