import styles from "@/styles/Home.module.css"

const Description = () => {
  return (
    <section className={styles.hero__description}>
      <h1>some title describing a highlight</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vero?</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ullam aperiam
        veritatis doloribus similique voluptatem tempore repudiandae nam, laudantium libero!
      </p>
      <p><b>Lorem ipsum dolor sit amet.</b></p>
      <button>call to action</button>
    </section>
  );
}

export default Description;