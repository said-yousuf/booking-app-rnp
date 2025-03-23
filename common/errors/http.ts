import {
  AxiosError,
  AxiosResponse,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from 'axios';
import { UseFormSetError } from 'react-hook-form';

/**
 * HttpError wraps an AxiosError to provide additional functionality
 * such as validation error handling and improved error management.
 */
export class HttpError {
  public readonly original: AxiosError;
  public readonly code?: string;
  public readonly message?: string;
  public readonly response?: AxiosResponse;
  public readonly config?: InternalAxiosRequestConfig;
  public readonly request?: any;

  /**
   * Constructs an instance of HttpError.
   *
   * @param error - The original Axios error object.
   */
  constructor(private readonly error: AxiosError) {
    this.original = error;

    this.code = error.code;
    this.message = error.message;
    this.response = error.response;
    this.config = error.config;
    this.request = error.request;
  }

  /**
   * Checks if the error is a validation error (HTTP 422 Unprocessable Entity).
   *
   * @returns True if the error is a validation error; otherwise, false.
   */
  public get isValidation() {
    return this.error.response?.status === HttpStatusCode.UnprocessableEntity;
  }

  /**
   * Determines if the error corresponds to a Two-Factor Authentication requirement
   * (HTTP 406 Not Acceptable).
   *
   * This method checks the HTTP status code of the error response to identify if
   * it indicates the need for two-factor authentication.
   *
   * @returns True if the error status is HTTP 406 (Not Acceptable); otherwise, false.
   */
  public get isTwoFactorAuth() {
    return this.error.response?.status === HttpStatusCode.NotAcceptable;
  }

  /**
   * Retrieves the validation errors from the server response, if any.
   *
   * @returns An array of InputError objects.
   */
  public get validationErrors(): { field: string; message: string }[] {
    if (!this.isValidation || !(this.error.response?.data as any).errors) {
      return [];
    }

    return (this.error.response?.data as any).errors;
  }

  /**
   * Applies validation errors to a form using react-hook-form's setError function.
   *
   * @param  setError - The setError function from react-hook-form.
   */
  public applyValidationErrors(setError: UseFormSetError<any>): void {
    if (!this.isValidation) {
      return;
    }

    const errors = this.validationErrors;
    errors.forEach(({ field, message }) => setError(field, { message }));
  }

  /**
   * Converts the error object to a JSON representation.
   *
   * @returns A JSON object representation of the error.
   */
  public toJSON() {
    return {
      code: this.code,
      message: this.message,
      response: this.response,
      config: this.config,
      request: this.request,
    };
  }
}
