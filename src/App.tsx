import { useEffect, useState } from "react";

const tsuru = { ashi: 2 };
const kame = { ashi: 4 };
const calculator = (total: number, summary: number) => {
  const { a, b } =
    tsuru.ashi < kame.ashi
      ? { a: tsuru.ashi, b: kame.ashi }
      : { a: kame.ashi, b: tsuru.ashi };

  const sa = summary - total * a;
  const wa = sa / (b / 2);
  return { a: total - wa, b: wa };
};

function App() {
  const total = 80;
  const summary = 200;
  const [tsuruCount, setTsuruCount] = useState(0);
  const [kameCount, setKameCount] = useState(0);

  useEffect(() => {
    const { a, b } = calculator(total, summary);
    setTsuruCount(a);
    setKameCount(b);
  }, []);

  return (
    <div>
      <p>
        鶴と亀が合計{total}匹います。足の数の和が{summary}
        本であったとき、鶴と亀はそれぞれ何匹いますか？
      </p>
      <div>鶴 ･･･ {tsuruCount}匹</div>
      <div>亀 ･･･ {kameCount}匹</div>
    </div>
  );
}

export default App;
