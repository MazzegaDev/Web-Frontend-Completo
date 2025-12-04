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

// if(isCompleteArticle(draft)){
//    publisArticle(draft);
// }else{
//    console.log("O artigo não esta completo")
// }


// function publisArticle(art: Required<Article>): void {
//   console.log("Publicanod o artigo...", art);
// }

// function isCompleteArticle(article: Article): article is Required<Article> {
//    return (
//       article.title !== undefined &&
//       article.subtitle !== undefined &&
//       article.desc !== undefined &&
//       article.createdAt !== undefined &&
//       article.public !== undefined 
//    )
// }