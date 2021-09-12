import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Reducer } from "../../store";

export const useTypesSelector: TypedUseSelectorHook<Reducer> = useSelector;