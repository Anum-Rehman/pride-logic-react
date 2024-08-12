import styles from "./index.module.scss";
import MinLines from "../minLines";

export default function Clock() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={styles.analog_clock}>
      <path
        id="circlePath"
        d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
      />
      <text>
        <MinLines repetition={4} />
      </text>
    </svg>
    // <div className={styles.analog_clock}>
    //     <div className={styles.analog_clock_container}>
    //         <MinLines repetition={150} />
    //         <div className={styles.analog_clock_needles}>.</div>
    //     </div>
    // </div>
  );
}
