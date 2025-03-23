import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from 'axios';
import { getUniqueId } from 'react-native-device-info';

import { HttpError } from '@/common/errors/http';
import { useAuthStore } from '@/stores/auth';

import { version as appVersion } from '../package.json';

/**
 * AxiosService handles all HTTP requests using Axios, with built-in
 * request and response interceptors, and a consistent API for making
 * HTTP requests.
 */
class AxiosService {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: process.env.EXPO_BASE_URL,
      timeout: 100000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  /**
   * Initialize request interceptor to add authorization headers.
   */
  private initializeRequestInterceptor(): void {
    this.http.interceptors.request.use(
      async (request: InternalAxiosRequestConfig) => {
        const token = useAuthStore.getState().token;

        if (token) {
          (request.headers as any).Authorization = `Bearer ${token}`;
        }

        const deviceId = await getUniqueId();
        if (deviceId) {
          request.headers['X-Device-ID'] = deviceId;
          request.headers['X-App-Version'] = appVersion;
        }

        return request;
      }
    );
  }

  /**
   * Initialize response interceptor to handle responses and errors.
   */
  private initializeResponseInterceptor(): void {
    this.http.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => this.handleError(error)
    );
  }

  /**
   * Handle response by returning the response data directly.
   *
   * @param {AxiosResponse} response - The incoming HTTP response.
   * @returns {AxiosResponse} - The response itself.
   */
  private handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  /**
   * Handle any error thrown during the HTTP request.
   *
   * @param {AxiosError} error - The error thrown by Axios.
   * @returns {Promise<never>} - A rejected promise containing the HttpError.
   */
  private handleError(error: AxiosError): Promise<never> {
    if (error.response?.status === HttpStatusCode.Unauthorized) {
      useAuthStore.persist.clearStorage();
    }

    return Promise.reject(new HttpError(error));
  }

  /**
   * Perform a GET request.
   *
   * @param {string} endpoint - The API endpoint.
   * @param {Object} [params] - Query parameters to include in the request.
   * @param {AxiosRequestConfig} [config] - Additional Axios configuration options.
   * @returns {Promise<T>} - The response data.
   */
  public async get<T>(
    endpoint: string,
    params?: Object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.http.get<T>(endpoint, { params, ...config });
    return this.handleResponse(response);
  }

  /**
   * Perform a POST request.
   *
   * @param {string} endpoint - The API endpoint.
   * @param {Object} [data] - The request payload.
   * @param {AxiosRequestConfig} [config] - Additional Axios configuration options.
   * @returns {Promise<T>} - The response data.
   */
  public async post<T>(
    endpoint: string,
    data?: Object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.http.post<T>(endpoint, data, config);
    return this.handleResponse(response);
  }

  /**
   * Perform a PUT request.
   *
   * @param {string} endpoint - The API endpoint.
   * @param {Object} [data] - The request payload.
   * @param {AxiosRequestConfig} [config] - Additional Axios configuration options.
   * @returns {Promise<T>} - The response data.
   */
  public async put<T>(
    endpoint: string,
    data?: Object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.http.put<T>(endpoint, data, config);
    return this.handleResponse(response);
  }

  /**
   * Perform a PATCH request.
   *
   * @param {string} endpoint - The API endpoint.
   * @param {Object} [data] - The request payload.
   * @param {AxiosRequestConfig} [config] - Additional Axios configuration options.
   * @returns {Promise<T>} - The response data.
   */
  public async patch<T>(
    endpoint: string,
    data?: Object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.http.patch<T>(endpoint, data, config);
    return this.handleResponse(response);
  }

  /**
   * Perform a DELETE request.
   *
   * @param {string} endpoint - The API endpoint.
   * @param {Object} [params] - Query parameters to include in the request.
   * @param {AxiosRequestConfig} [config] - Additional Axios configuration options.
   * @returns {Promise<T>} - The response data.
   */
  public async delete<T>(
    endpoint: string,
    params?: Object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.http.delete<T>(endpoint, { params, ...config });
    return this.handleResponse(response);
  }
}

export const api = new AxiosService();
