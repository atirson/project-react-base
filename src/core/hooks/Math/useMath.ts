import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@core/store';
import * as MathActions from '@core/store/Math/Math.slice';

export default function useMath() {
  const dispatch = useDispatch<AppDispatch>();
  const value = useSelector((state: RootState) => state.math.value);

  function handleAdd(numberAdd: number) {
    dispatch(MathActions.sum(numberAdd));
  }

  function handleSub(numberSub: number) {
    dispatch(MathActions.sub(numberSub));
  }

  return {
    value,
    handleAdd,
    handleSub,
  };
}
