// interface Article {
//   title?: string;
//   subtitle?: string;
//   desc?: string;
//   createdAt?: Date;
//   public?: boolean;
// }

// const draft: Article = { title: "Required" };

// draft.subtitle = "Propriedades obrigatorias";
// draft.desc = "desc";
// draft.createdAt = new Date();
// draft.public = true;

// //Type assertion
// publisArticle(draft as Required<Article>);

// const completeArticle: Required<Article> = {
//   title: draft.title ?? "",
//   subtitle: draft.subtitle ?? "",
//   desc: draft.desc ?? "",
//   createdAt: draft.createdAt ?? new Date(),
//   public: draft.public ?? false,
// };

// function publisArticle(art: Required<Article>): void {
//   console.log("Publicanod o artigo...", art);
// }

// publisArticle(completeArticle);
