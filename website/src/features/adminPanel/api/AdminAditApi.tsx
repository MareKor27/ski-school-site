import axios from "axios";
import { useSessionStore } from "~/features/authorization/store/useSessionStore";
import { store } from "~/features/environment/EnironmentStoreProvider";
import { CollectionResponseDto } from "./type/collectionResponse.dto";
import { AuditLog } from "./type/auditLog.dto";

const api = axios.create();

api.interceptors.request.use(
  (config) => {
    const token = useSessionStore.getState().token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    const baseUrl = store.getState().apiBaseUrl;
    if (!baseUrl) throw new Error("Config not loaded");
    config.baseURL = baseUrl;

    return config;
  },
  (error) => Promise.reject(error),
);

export async function readAudits(): Promise<CollectionResponseDto<AuditLog>> {
  console.log("audit");
  const response = await api.get<CollectionResponseDto<AuditLog>>("/auditlog");
  return response.data;
}
