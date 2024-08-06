import { Timetable as TTimetable } from "../api/timetable/Timetable";

export const TIMETABLE_TITLE_FIELD = "classField";

export const TimetableTitle = (record: TTimetable): string => {
  return record.classField?.toString() || String(record.id);
};
