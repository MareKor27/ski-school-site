export const LessonStatus = {
  RESERVED: "reserved",
  VERIFIED: "verified",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

export const lessonStatusLabelsPL = {
  [LessonStatus.VERIFIED]: "Zweryfikowane",
  [LessonStatus.RESERVED]: "Zarezerwowane",
  [LessonStatus.COMPLETED]: "Zakończone",
  [LessonStatus.CANCELLED]: "Anulowane",
};

export type LessonStatus = (typeof LessonStatus)[keyof typeof LessonStatus];
export const lessonStatusLabels = Object.values(LessonStatus);
