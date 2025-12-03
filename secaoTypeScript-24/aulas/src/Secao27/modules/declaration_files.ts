
type Font = "roboto" | "open sans";
type ColorScheme = "light" | "dark";
type Layout = "one-column" | "two-column";

class My_resume implements Resume {
  constructor(
    public fullName: string,
    public email: string,
    public skills: Skills[],
    public font: Font,
    public colorScheme: ColorScheme,
    public dateofBirth: Date,
    public layout: Layout,
  ) {}

  addSkill(skill: Skills): boolean {
    const initialLength = this.skills.length;
    this.skills.push(skill);

    return this.skills.length > initialLength;
  }
}

//Interfaces sendo chamadas do arquivo de declaration files.
// global.d.ts


const guiresume = new My_resume(
  "Gui",
  "Gmail.com",
  [],
  "open sans",
  "dark",
  new Date(),
  "two-column",
);

guiresume.addSkill({ name: "Ts", level: "beginner" });
guiresume.addSkill({ name: "Js", level: "advanced" });
console.log(guiresume);
