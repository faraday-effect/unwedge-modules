import { DateTime } from "luxon";

export function nowTypeScript(): DateTime {
  return DateTime.local();
}
