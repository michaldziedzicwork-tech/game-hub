import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState, type DependencyList } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endopoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: DependencyList
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endopoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- callers pass full dependency list as `deps`
  }, deps ?? []);

  return { data, error, isLoading };
};

export default useData;
