/** @format */

// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "快速开始",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "介绍", href: "/introduction" },
      { title: "使用说明", href: "/guide" },
      {
        title: "已知问题",
        href: "/problems-and-improvements",
        noLink: true,
        items: [
          { title: "产品设计", href: "/products" },
          { title: "技术优化", href: "/development" },
        ],
      },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
