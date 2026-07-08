import { SITE_URL, SUPPORT_EMAIL } from "@/lib/constants";

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${SUPPORT_EMAIL}`;

export type FormSubmitResult =
  | { ok: true }
  | { ok: false; message: string; needsActivation?: boolean };

export async function submitToFormSubmit(
  fields: Record<string, string>,
): Promise<FormSubmitResult> {
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Referer: `${SITE_URL}/`,
      Origin: SITE_URL,
    },
    body: JSON.stringify({
      _template: "table",
      _captcha: "false",
      ...fields,
    }),
  });

  const payload = await response.json().catch(() => null);

  if (
    payload &&
    typeof payload === "object" &&
    "success" in payload &&
    payload.success === "true"
  ) {
    return { ok: true };
  }

  const message =
    payload &&
    typeof payload === "object" &&
    "message" in payload &&
    typeof payload.message === "string"
      ? payload.message
      : "Unable to send your message. Please try again or email us directly.";

  const needsActivation = message.toLowerCase().includes("activation");

  return { ok: false, message, needsActivation };
}