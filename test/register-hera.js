import { createRequire, register } from "node:module"
import heraOptions from "../build/hera-options.js"

register("@danielx/hera/register/civet/esm", import.meta.url, { data: { hera: heraOptions } })
createRequire(import.meta.url)("@danielx/hera/register/civet/cjs").options.hera = heraOptions
