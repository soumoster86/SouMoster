export type FormError = Error & { needsActivation?: boolean };

export function getFormErrorMessage(error: unknown, fallback: string) {
  if (error instanceof Error) {
    const formError = error as FormError;
    if (formError.needsActivation) {
      return {
        type: "info" as const,
        message:
          "Almost there! Check soumoster@gmail.com (including spam) for a FormSubmit activation email. Click Activate Form, then submit again.",
      };
    }
    return { type: "error" as const, message: formError.message };
  }
  return { type: "error" as const, message: fallback };
}