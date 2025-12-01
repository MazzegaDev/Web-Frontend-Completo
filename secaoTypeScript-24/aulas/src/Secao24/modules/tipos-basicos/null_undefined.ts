export const func = (): void => {
  let title = null;
  console.log("title", title);

  let subtitle = undefined;
  console.log("subtitle", subtitle);

  type Page = {
    title: string;
    subtitle?: String;
    handlerPage?: () => void;
  };

  const page: Page = {
    title: "Curso de ts",
  };

  page.handlerPage = (): void => {
    console.log("Executou a func");
  };

  console.log("Page subtitle: ", page.handlerPage());
};

func();
