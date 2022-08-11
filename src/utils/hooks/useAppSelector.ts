import { type TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootStateType } from '../../store';

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
