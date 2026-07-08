import { SUPPORT_EMAIL } from "@/lib/constants";

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(SUPPORT_EMAIL)}`;

async function forwardToInbox(fields: Record<string, string>) {
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _template: "table",
      _captcha: "false",
      ...fields,
    }),
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => null);
    const message =
      payload && typeof payload === "object" && "message" in payload && typeof payload.message === "string"
        ? payload.message
        : "Failed to send. Please email us directly.";
    throw new Error(message);
  }

  return response.json().catch(() => ({ success: true }));
}

export async function submitContact(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return forwardToInbox({
    _subject: `[Contact] ${data.subject}`,
    _replyto: data.email,
    Name: data.name,
    Email: data.email,
    Subject: data.subject,
    Message: data.message,
  });
}

export async function submitSupport(data: {
  type: "bug" | "feature";
  email: string;
  app: string;
  description: string;
}) {
  const label = data.type === "bug" ? "Bug Report" : "Feature Request";

  return forwardToInbox({
    _subject: `[${label}] ${data.app}`,
    _replyto: data.email,
    Type: label,
    Email: data.email,
    App: data.app,
    Description: data.description,
  });
}