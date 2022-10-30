import { useContext } from "react";
import { DiscoverMovieContext } from "../contexts/DiscoverMovieContextProvider";

export const useDiscoverMovieContext = () => useContext(DiscoverMovieContext);
