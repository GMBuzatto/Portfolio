import { createElement, type JSX } from "react";
import Markdown, { defaultUrlTransform, type Components, type ExtraProps } from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { resolveReadmeUrl } from "../readme";
import { MermaidDiagram } from "./mermaid-diagram";

type Tag = keyof JSX.IntrinsicElements;

/** Remove o `node` (AST) que o react-markdown injeta, para não ir parar no DOM. */
function withoutNode<P extends ExtraProps>(props: P): Omit<P, "node"> {
  const rest = { ...props };
  delete rest.node;
  return rest;
}

/** Cria um componente que renderiza a tag do markdown com as classes do tema. */
function styled(tag: Tag, className: string) {
  function MarkdownElement(props: JSX.IntrinsicElements[Tag] & ExtraProps) {
    return createElement(tag, { ...withoutNode(props), className });
  }
  return MarkdownElement;
}

const heading = "scroll-mt-24 font-bold tracking-tight text-foreground";
const list = "flex flex-col gap-1.5 pl-6 marker:text-text-tertiary";

const components: Components = {
  h1: styled("h1", `${heading} text-3xl`),
  h2: styled("h2", `${heading} mt-6 border-b pb-2 text-2xl`),
  h3: styled("h3", `${heading} mt-4 text-xl`),
  h4: styled("h4", `${heading} mt-2 text-lg`),
  p: styled("p", "leading-relaxed"),
  ul: styled("ul", `${list} list-disc`),
  ol: styled("ol", `${list} list-decimal`),
  li: styled("li", "leading-relaxed"),
  hr: styled("hr", "border-border"),
  blockquote: styled(
    "blockquote",
    "flex flex-col gap-2 rounded-r-md border-l-4 border-highlight bg-background-subtle px-4 py-3",
  ),
  th: styled("th", "border-b bg-background-subtle px-3 py-2 text-left font-semibold"),
  td: styled("td", "border-b px-3 py-2 align-top"),
  code: styled("code", "rounded bg-background-subtle px-1.5 py-0.5 font-mono text-[0.9em]"),
  a: (props) => {
    const isExternal = props.href?.startsWith("http");
    return (
      <a
        {...withoutNode(props)}
        className="font-medium text-text-brand hover:underline"
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      />
    );
  },
  table: (props) => (
    <div className="overflow-x-auto rounded-lg border">
      <table {...withoutNode(props)} className="w-full border-collapse text-sm" />
    </div>
  ),
  pre: (props) => {
    const code = props.node?.children[0];
    const isMermaid =
      code?.type === "element" &&
      String(code.properties.className ?? "").includes("language-mermaid");

    if (isMermaid) {
      const chart = code.children
        .map((child) => (child.type === "text" ? child.value : ""))
        .join("");
      return <MermaidDiagram chart={chart} />;
    }

    return (
      <pre
        {...withoutNode(props)}
        className="overflow-x-auto rounded-lg border bg-background-subtle p-4 text-sm leading-relaxed [&_code]:bg-transparent [&_code]:p-0"
      />
    );
  },
  div: (props: JSX.IntrinsicElements["div"] & ExtraProps & { align?: string }) => {
    const { align, ...rest } = withoutNode(props);
    return (
      <div
        {...rest}
        className={align === "center" ? "flex flex-col items-center gap-3 text-center" : undefined}
      />
    );
  },
};

export function ReadmeContent({
  markdown,
  repositoryUrl,
}: {
  markdown: string;
  repositoryUrl: string;
}) {
  return (
    <article className="flex flex-col gap-5 text-text-secondary [&_img]:inline-block [&_img]:max-w-full [&_strong]:text-foreground">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeSlug]}
        urlTransform={(url, key) => resolveReadmeUrl(defaultUrlTransform(url), key, repositoryUrl)}
        components={components}
      >
        {markdown}
      </Markdown>
    </article>
  );
}
