export type FormError = Error & { needsActivation?: boolean };

/**
 * Toast text for a failed form submission. `activationMessage` is the localized
 * FormSubmit "activate the form" hint (common.forms.activationNeeded).
 */
export function getFormErrorMessage(
  error: unknown,
  fallback: string,
  activationMessage?: string,
) {
  if (error instanceof Error) {
    const formError = error as FormError;
    if (formError.needsActivation) {
      return {
        type: "info" as const,
        message:
          activationMessage ??
          "Almost there! Check soumoster@gmail.com (including spam) for a FormSubmit activation email. Click Activate Form, then submit again.",
      };
    }
    return { type: "error" as const, message: formError.message };
  }
  return { type: "error" as const, message: fallback };
}