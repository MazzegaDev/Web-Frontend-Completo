// interface Resume {
//   fullName: string;
//   email: string;
//   skills: Skills[];
//   addSkill?: (skill: Skills) => boolean
// }

// interface Skills {
//   name: string;
//   level: "beginner" | "intermediate" | "advanced";
// }


// class My_Resume implements Resume{
//    constructor(
//       public fullName: string,
//       public email: string,
//       public skills: Skills[],
//    ){

//    }

//    addSkill(skill: Skills): boolean{
//       const initialLength = this.skills.length;
//       this.skills.push(skill);

//       return this.skills.length > initialLength;
//    }
// }

// const GuiResume = new My_Resume('Gui', 'Gmail.com', []);

// GuiResume.addSkill({name: 'Ts', level: "beginner"});
// GuiResume.addSkill({name: 'Js', level: "advanced"});
// console.log(GuiResume);



// // const myResume: Resume = {
// //   fullName: "Guilherme Mazzega",
// //   email: "gmazzega@gmail.com",
// //   skills: [
// //     { name: "JS", level: "advanced" },
// //     { name: "TS", level: "intermediate" },
// //   ],

// // };
