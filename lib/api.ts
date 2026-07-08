function getErrorMessage(payload: unknown, fallback: string) {
  if (
    payload &&
    typeof payload === "object" &&
    "error" in payload &&
    typeof payload.error === "string"
  ) {
    return payload.error;
  }
  return fallback;
}

function needsActivation(payload: unknown): boolean {
  return (
    !!payload &&
    typeof payload === "object" &&
    "needsActivation" in payload &&
    (payload as { needsActivation?: boolean }).needsActivation === true
  );
}

async function postJson<T>(url: string, data: T) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    const error = new Error(getErrorMessage(payload, "Request failed")) as Error & {
      needsActivation?: boolean;
    };
    error.needsActivation = needsActivation(payload);
    throw error;
  }

  return payload;
}

export async function submitContact(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return postJson("/api/contact", data);
}

export async function submitSupport(data: {
  type: "bug" | "feature";
  email: string;
  app: string;
  description: string;
}) {
  return postJson("/api/support", data);
}