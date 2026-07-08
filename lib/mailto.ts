import { SUPPORT_EMAIL } from "@/lib/constants";

function buildMailtoUrl(subject: string, body: string) {
  const params = new URLSearchParams();
  params.set("subject", subject);
  params.set("body", body);
  return `mailto:${SUPPORT_EMAIL}?${params.toString()}`;
}

export function openBugReportMailto(data: {
  email: string;
  app: string;
  description: string;
}) {
  const body = [
    `App: ${data.app}`,
    `Reporter email: ${data.email}`,
    "",
    data.description,
  ].join("\n");

  window.location.href = buildMailtoUrl(`[Bug Report] ${data.app}`, body);
}

export function openFeatureRequestMailto(data: {
  email: string;
  app: string;
  description: string;
}) {
  const body = [
    `App: ${data.app}`,
    `Requester email: ${data.email}`,
    "",
    data.description,
  ].join("\n");

  window.location.href = buildMailtoUrl(`[Feature Request] ${data.app}`, body);
}

export function openContactMailto(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const body = [`Name: ${data.name}`, `Email: ${data.email}`, "", data.message].join("\n");

  window.location.href = buildMailtoUrl(`[Contact] ${data.subject}`, body);
}