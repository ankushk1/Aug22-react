const val = {
  name :"ABC",
  age: 20
}

import {useSelector} from 'react-redux';

function Component1() {

  const globalCount = useSelector((state) => state.counter.count);
  console.log('Global State -----> ', globalCount)
  return (
    <div>
      <h2>{val.name}</h2>
      <h2>{globalCount}</h2>
    </div>
  );
}

export default Component1;
