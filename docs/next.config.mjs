import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Gives every heading an id derived from its text (e.g. "## Why multiply
    // before divide" -> id="why-multiply-before-divide"), which is what every
    // in-page and cross-page `#anchor` link in these docs relies on.
    // Tokenises fenced code blocks into hljs-* spans; the colours live in
    // globals.css. Copy still works because CodeBlock flattens the spans back to text.
    rehypePlugins: [rehypeSlug, rehypeHighlight],
  },
});

export default withMDX(nextConfig);
