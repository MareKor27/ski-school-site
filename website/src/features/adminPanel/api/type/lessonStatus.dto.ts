export const LessonStatus = {
  RESERVED: "reserved",
  VERIFIED: "verified",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

export const lessonStatusLabelsPL = {
  [LessonStatus.RESERVED]: "Zarezerwowane",
  [LessonStatus.VERIFIED]: "Zweryfikowane",
  [LessonStatus.COMPLETED]: "Zakończone",
  [LessonStatus.CANCELLED]: "Anulowane",
};

export type LessonStatus = (typeof LessonStatus)[keyof typeof LessonStatus];
export const lessonStatusLabels = Object.values(LessonStatus);
