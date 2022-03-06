import { CountProvider, useCount } from '@core/context/Count';

function ContextComponent() {
  const { count, handleAdd } = useCount();

  return (
    <div>
      <div>{count}</div>
      <button type="button" onClick={() => handleAdd()}>Add</button>
    </div>
  );
}

export default function ContextExample() {
  return (
    <CountProvider><ContextComponent /></CountProvider>
  );
}
