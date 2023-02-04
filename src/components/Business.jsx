import { features } from "../constants"
import styles, { layout } from "../style"
import Button from './Button';

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we'll handle the moneys honey.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your home life by buying stuff you dont need. But with hundreds of credit cards on the market.
        </p>
      </div>

    </section>
  )
}

export default Business