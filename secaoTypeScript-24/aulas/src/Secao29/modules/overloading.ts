type Methods = "GET" | "POST" | "DELETE";

class FormHandler {
  createForm(inpts: string[]): HTMLFormElement;
  createForm(inpts: string[], action: string, method: Methods): HTMLFormElement;
  createForm(): HTMLFormElement;

  createForm(
    inpts?: string[],
    action?: string,
    method?: Methods,
  ): HTMLFormElement {
    const form = document.createElement("form");

    if (action) {
      form.setAttribute("action", action);
    }
    if (method) {
      form.setAttribute("method", method);
    }

    if (inpts && inpts.length > 0) {
      inpts.map((v) => {
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", v);

        form.appendChild(input);
      });
    }

    document.body.appendChild(form);
    return form;
  }
}
const form = new FormHandler();
form.createForm();
form.createForm(["Nome", "Apelido"]);
form.createForm(["Nome", "Apelido"], "/product", "POST");
