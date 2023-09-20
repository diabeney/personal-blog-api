import { remark } from "remark";
import { readFileSync } from "fs";

export const MarkdownController = {
  getMarkdown: async (req, res) => {
    const filePath = res.blogPath;
    const postdata = res.foundPost;
    const fileContent = readFileSync(filePath, "utf-8");
    const processedContent = await remark().process(fileContent);
    const contentHtml = processedContent.toString();
    res.status(201).json({ data: contentHtml, postData: postdata });
  }
};
