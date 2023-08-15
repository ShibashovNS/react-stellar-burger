import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, DispatchFunc, RootState } from '../../utils/types'


// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector