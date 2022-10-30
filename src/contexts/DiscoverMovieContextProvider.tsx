import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import {
  DiscoverMovieContextType,
  DiscoverMovieReducerActionEnum,
  DiscoverMovieReducerStateType,
  DiscoverMovieReducerType,
} from "../@types/movieContext";
import { UseCustomSearchParamsType } from "../@types/SearchParams";
import { useCustomSearchParams } from "../hooks/useSearchParams";

const reducerInitialValues: DiscoverMovieReducerStateType = {
  page: 1,
  totalPages: 1,
  enabled: false,
};

const reducer: DiscoverMovieReducerType = (state, action) => {
  switch (action.type) {
    case DiscoverMovieReducerActionEnum.PAGINATION:
      return { ...state, page: action.data.page };
    case DiscoverMovieReducerActionEnum.FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.data.filters,
        },
      };
    case DiscoverMovieReducerActionEnum.TOTAL_PAGES:
      return { ...state, totalPages: action.data.totalPages };
    case DiscoverMovieReducerActionEnum.ENABLED:
      return { ...state, enabled: action.data.enabled };
    default:
      return state;
  }
};

export const DiscoverMovieContext = createContext<DiscoverMovieContextType>({
  state: reducerInitialValues,
  updatePagination: () => {},
  updateFilters: () => {},
  updateTotalPages: () => {},
  updateEnabled: () => {},
});

interface DiscoverMovieContextProviderPropsType {
  children: ReactNode;
}
const DiscoverMovieContextProvider = ({
  children,
}: DiscoverMovieContextProviderPropsType) => {
  const [state, dispatch] = useReducer(reducer, reducerInitialValues);

  const { deserialized, handleSerialized } = useCustomSearchParams();

  const updatePagination = useCallback(
    (data: UseCustomSearchParamsType) => {
      dispatch({
        type: DiscoverMovieReducerActionEnum.PAGINATION,
        data,
      });
      handleSerialized(data);
    },
    [handleSerialized],
  );
  const updateFilters = useCallback(
    (data: UseCustomSearchParamsType) => {
      dispatch({
        type: DiscoverMovieReducerActionEnum.FILTERS,
        data: {
          filters: data.filters,
        },
      });
      handleSerialized(data);
    },
    [handleSerialized],
  );
  const updateTotalPages = useCallback((totalPages: number) => {
    dispatch({
      type: DiscoverMovieReducerActionEnum.TOTAL_PAGES,
      data: { totalPages },
    });
  }, []);
  const updateEnabled = useCallback((enabled: boolean) => {
    dispatch({
      type: DiscoverMovieReducerActionEnum.ENABLED,
      data: { enabled },
    });
  }, []);

  useEffect(() => {
    const { page, ...otherDeserializedValue } = deserialized;
    dispatch({
      type: DiscoverMovieReducerActionEnum.PAGINATION,
      data: {
        page: !!page ? Number(page) : 1,
      },
    });

    dispatch({
      type: DiscoverMovieReducerActionEnum.FILTERS,
      data: {
        filters: otherDeserializedValue,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DiscoverMovieContext.Provider
      value={{
        state,
        updatePagination,
        updateFilters,
        updateTotalPages,
        updateEnabled,
      }}
    >
      {children}
    </DiscoverMovieContext.Provider>
  );
};
export default DiscoverMovieContextProvider;
