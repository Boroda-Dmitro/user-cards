import css from './Home.module.css'

export default function Home() {
    return (
      <div className={css.container}>
        <p className={css.text}>
          Welcome to our website! Here you can find the cards of User tweets.
        </p>
        <p className={css.text}>
          Explore our site to discover interesting content.
        </p>
        <p className={css.text}>Enjoy your time here!</p>
      </div>
    );
  }