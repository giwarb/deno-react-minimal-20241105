/**
 * 2つの数値を加算します。
 * @param x 最初の数値
 * @param y 2番目の数値
 * @returns x と y の合計
 */
export function add(x: number, y: number): number {
  return x + y;
}

/**
 * アプリケーションのメインコンポーネントです。
 * @param props プロパティ
 * @returns React要素
 */
export function App(
  { x, y }: { x: number; y: number },
) {
  return (
    <div>
      <h1>My React and TypeScript App!</h1>
      <p>{x} + {y} = {add(x, y)}</p>
    </div>
  );
}
