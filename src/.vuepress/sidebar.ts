import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Yunzai搭建",
      icon: "laptop-code",
      prefix: "docs1/",
      link: "docs1/",
      children: "structure",
    },
    {
      text: "Python安装",
      icon: "laptop-code",
      prefix: "docs2/",
      link: "docs2/",
      children: "structure",
    },
  ],
});
