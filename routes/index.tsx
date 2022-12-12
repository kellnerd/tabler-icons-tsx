import { Head } from "$fresh/runtime.ts";
import IconList from "../islands/IconList.tsx";
import BrandTabler from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-tabler.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import icons from "../data/icons.json" assert { type: "json" };
import CodeBlock from "../islands/CodeBlock.tsx";

interface Icons {
  icons: string[];
}

export const handler: Handlers<Icons> = {
  GET(_, ctx) {
    return ctx.render({ icons });
  },
};

export default function Home({ data }: PageProps<Icons>) {
  const example =
    `import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx"

<IconBrandGithub class="w-6 h-6" />`;

  return (
    <>
      <Head>
        <title>TSX Tabler Icons</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons@1.106.0/iconfont/tabler-icons.css"
        >
        </link>
        <link
          rel="stylesheet"
          href="https://esm.sh/prismjs@1.27.0/themes/prism-dark.min.css"
        />
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-4xl flex items-center font-bold">
          <BrandTabler class="inline-block w-10 h-10" />
          <div>
            TSX Tabler Icons
          </div>
        </h1>

        <p class="mt-2">
          Easy to use{" "}
          <a
            class="text-blue-500 hover:underline"
            href="https://tabler-icons.io/"
          >
            Tabler Icons
          </a>{" "}
          in your Fresh app. Just import the icons.
        </p>
        <p class="mt-2">
          <a href="https://fresh.deno.dev">
            <img
              width="160"
              height="32"
              src="https://fresh.deno.dev/fresh-badge.svg"
              alt="Made with Fresh"
            />
          </a>
        </p>

        <p class="mt-2">
          <h2 class="text-sm font-bold uppercase text-gray-500">Usage</h2>

          <CodeBlock code={example} copy></CodeBlock>
        </p>

        <IconList icons={data.icons} />
      </div>
    </>
  );
}
