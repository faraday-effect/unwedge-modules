import { DateTime } from "luxon";

export function nowJavaScript() {
  return new DateTime.local();
}
