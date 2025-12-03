// interface Resume {
//   fullName: string;
//   email: string;
//   skills: Skills[];
//   addSkill?: (skill: Skills) => boolean;
// }

// interface Skills {
//   name: string;
//   level: "beginner" | "intermediate" | "advanced";
// }

// // Apenas é fundido(merge) na interface Resume.
// interface Resume{
//    dateOfBirth?: Date,
//    sumary?: string,
// }


// class My_resume implements Resume {
//   constructor(
//     public fullName: string,
//     public email: string,
//     public skills: Skills[],
//   ) {}

//   addSkill(skill: Skills): boolean {
//     const initialLength = this.skills.length;
//     this.skills.push(skill);

//     return this.skills.length > initialLength;
//   }
// }

// const Guiresume = new My_Resume("Gui", "Gmail.com", []);

// Guiresume.addSkill({ name: "Ts", level: "beginner" });
// Guiresume.addSkill({ name: "Js", level: "advanced" });
// console.log(Guiresume);

