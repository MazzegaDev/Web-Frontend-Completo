// interface PersonalInfo {
//   fullName: string;
//   email: string;
//   dateOfBirth?: Date;
//   sumary?: string;
// }
// type Font = "roboto" | "open sans";
// type ColorScheme = "light" | "dark";
// type Layout = "one-column" | "two-column";

// interface Theme {
//   font: Font;
//   colorScheme: ColorScheme;
//   layout: Layout;
// }
// interface Skills {
//   name: string;
//   level: "beginner" | "intermediate" | "advanced";
// }

// interface Resume extends PersonalInfo, Theme {
//   skills: Skills[];
//   addSkill?: (skill: Skills) => boolean;
// }

// class my_resume implements Resume {
//   constructor(
//     public fullName: string,
//     public email: string,
//     public skills: Skills[],
//     public font: Font,
//     public colorScheme: ColorScheme,
//     public layout: Layout,
//   ) {}

//   addSkill(skill: Skills): boolean {
//     const initialLength = this.skills.length;
//     this.skills.push(skill);

//     return this.skills.length > initialLength;
//   }
// }

// const guiResume = new my_resume(
//   "Gui",
//   "Gmail.com",
//   [],
//   "open sans",
//   "dark",
//   "two-column",
// );

// guiResume.addSkill({ name: "Ts", level: "beginner" });
// guiResume.addSkill({ name: "Js", level: "advanced" });
// console.log(guiResume);
