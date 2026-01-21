import axios from "axios";
import { QuickContactDto } from "~/features/adminPanel/api/type/quickContact.dto";
import { ResponseDto } from "~/features/adminPanel/api/type/response.dto";
import { handleApiError } from "~/features/authorization/services/ErrorServices";
import { store } from "~/features/environment/EnironmentStoreProvider";

const api = axios.create();

api.interceptors.request.use(
  (config) => {
    const baseUrl = store.getState().apiBaseUrl;
    if (!baseUrl) throw new Error("Config not loaded");
    config.baseURL = baseUrl;
    return config;
  },
  (error) => Promise.reject(error),
);

export async function sendQuickContact(
  quickContact: QuickContactDto,
): Promise<ResponseDto<void>> {
  try {
    const response = await api.post<ResponseDto<void>>(
      "/quick-contact",
      quickContact,
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
