import "./Home.css";
import img1 from "../../Assets/img_1.jpg";

const Home = () => {
  return (
    <div className="home__main__container">
      <div className="home__section__one__container">
        <img className="home__img" src={img1} />
        <h1 className="home__section__one__text">Lorem Ipsum</h1>
      </div>
      <div>
        <h1 className="home__section__two__text">Lorem ipsum?</h1>
        <p className="home__section__two__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          maximus ante sit amet lacus tristique aliquet. Fusce id sem et augue
          vestibulum viverra nec sed lorem. Sed vitae sapien quis felis rutrum
          molestie a sit amet enim. Nam gravida nec nisi a suscipit. Integer
          blandit nulla ac tortor consequat, at tempus sapien venenatis. <br />
          Quisque a odio nec nulla auctor laoreet. Aenean eget gravida nibh,
          eget efficitur nulla. Fusce tincidunt et purus et blandit. Quisque vel
          nisl vitae quam cursus sollicitudin eu ac orci. Donec pellentesque
          nisi ante, nec consequat felis scelerisque vitae. Ut in velit
          placerat, facilisis mauris id, mattis mauris. Nunc consequat tortor
          eget dictum faucibus. Quisque ac tempus velit, ac rhoncus massa. Sed
          pretium mauris quis nulla ullamcorper, vel lobortis nulla convallis.
          Quisque ut felis a neque pulvinar blandit eu ac lacus. Suspendisse
          nunc mauris, facilisis at metus a, dictum semper est. Vestibulum
          congue dui vel commodo ullamcorper. <br /> <br />
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Fusce facilisis nisl lorem, posuere maximus
          nunc facilisis non. Vivamus dapibus libero sed feugiat congue.
          Suspendisse scelerisque eu tortor sed tincidunt. Aenean dictum sodales
          elit nec pellentesque.
        </p>
      </div>
    </div>
  );
};

export default Home;
