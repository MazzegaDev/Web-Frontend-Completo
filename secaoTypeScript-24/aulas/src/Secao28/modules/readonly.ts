interface Article{
   title: string,
   subtitle?: string,
}

const articles: Readonly<Article>[] = [
  {
    title: "Aprendendo a stack MERN",
  },
  {
    title: "Aprendendo C#",
  },
  {
    title: "Aprendendo Java", subtitle: "Aprendendo java com spring",
  },
];

//articles[1].title = "Aprendendo TS"
//articles[1].subtitle = "Com Jorge Sant Ana"

console.log(articles)