export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  studentCode: string;
  academicProgram: {
    name: string;
    code: string;
  };
  // Add other properties as needed
}
