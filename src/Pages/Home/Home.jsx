import css from './Home.module.css'

export default function Home() {
    return (
      <div className={css.container}>
        <h1 className={css.heading}>Home</h1>
        <p className={css.text}>
          Welcome to our website! Here you can find the cards of Users tweets.
        </p>
        <p className={css.text}>
          Explore our site to discover interesting content, connect with others, and share your thoughts.
        </p>
        <p className={css.text}>Enjoy your time here!</p>
      </div>
    );
  }