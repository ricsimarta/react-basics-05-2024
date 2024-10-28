import { useState } from 'react';
import './Text.css';

function Text({ content, color }) {
  // const { content, color } = props;

  /* const content = props.content;
  const color = props.color; */

  const [counter, setCounter] = useState(0);
  console.log(content, counter);

  const handleClick = () => setCounter(counter + 1);

  return (
    <>
      <h2 className={color}>{content}</h2>
      <p>counter: {counter}</p>
      <button onClick={handleClick} disabled={counter >= 10 ? true : false}>increase</button>
      {counter >= 10 && <span>enough!</span>}
    </>
  )
}

export default Text;