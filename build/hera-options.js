/** Hera compile options for src/parser.hera, shared by the build and the tests */
export default {
  // Packrat-style memo of rule results, keyed on the parser state
  memo: true,
  // Hooks around every rule, for the `trace` compile option
  trace: true,
}
