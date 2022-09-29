import ParallaxContainer from '../src/ParallaxContainer';
import './app.css';

function Demo() {
  return (
    <ParallaxContainer
      className="overflow-hidden"
      style={{
        width: '400px',
        borderRadius: '10px',
        border: '1px solid #eee',
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
      }}
    >
      <img src="https://picsum.photos/seed/picsum/400/250" alt="" width={400} height={250} />
      <p>a text title or description </p>
    </ParallaxContainer>
  );
}

export default Demo;
