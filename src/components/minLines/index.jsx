import { useEffect } from "react";
import styles from "./index.module.scss";

export default function MinLines({ repetition }) {
    useEffect(() => {

    }, [])
  return (
    <textPath className={styles.minLines} href="#circlePath">
        {
            Array.from(Array(repetition), (e, i) => <sup>a</sup>)
        }
    </textPath>
  );
}
