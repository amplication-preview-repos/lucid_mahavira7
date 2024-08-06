import { Attendance as TAttendance } from "../api/attendance/Attendance";

export const ATTENDANCE_TITLE_FIELD = "student";

export const AttendanceTitle = (record: TAttendance): string => {
  return record.student?.toString() || String(record.id);
};
