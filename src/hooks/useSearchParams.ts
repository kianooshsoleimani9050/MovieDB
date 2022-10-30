import { useSearchParams } from "react-router-dom";
import { UseCustomSearchParamsType } from "../@types/SearchParams";
import { deserializeParams, serializeParams } from "../utils/common";

export const useCustomSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const deserialized = deserializeParams(searchParams);
  const handleSerialized = (paramsArg: UseCustomSearchParamsType) => {
    setSearchParams(serializeParams(paramsArg));
  };
  return {
    deserialized,
    handleSerialized,
  };
};
