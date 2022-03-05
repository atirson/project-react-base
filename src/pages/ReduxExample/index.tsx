import useMath from '@app/core/hooks/Math/useMath';

export default function ReduxExample() {
  const { value, handleAdd, handleSub } = useMath();

  return (
    <div>
      <div>{value}</div>
      <button type="button" onClick={() => handleAdd(1)}>Add</button>
      <button type="button" onClick={() => handleSub(1)}>Subtract</button>
    </div>
  );
}
