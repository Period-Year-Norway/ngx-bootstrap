/**
 * Raw source imports used by the documentation pages to show demo code.
 *
 * Usage: import * as src from './file.ts?raw' with { loader: 'text' };
 * The `loader: 'text'` attribute is handled by the Angular esbuild builder,
 * the `?raw` suffix keeps TypeScript from resolving the real module.
 */
declare module '*?raw' {
  const content: string;
  export default content;
}
