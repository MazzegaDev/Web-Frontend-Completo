//Permite que as interfaces sejam usadas em qualquer arquivo sem mesmo precisar importar

interface PersonalInfo {
  fullName: string;
  email: string;
  /**
   * new Date()
   */
  dateOfBirth?: Date;
  sumary?: string;
}
interface Theme {
  font: Font;
  colorScheme: ColorScheme;
  layout: Layout;
}
interface Skills {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
}
/** 
   * Interface de criação de curriculos
*/
interface Resume extends PersonalInfo, Theme {
  skills: Skills[];
  addSkill?: (skill: Skills) => boolean;
}
