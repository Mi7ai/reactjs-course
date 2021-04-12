import './index.css';

function Booklist() {
  return (
    <div className="booklist">
      <Book />
      <Book />
      <Book />
    </div>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

// nested component
const Image = () => {
  return (
    <div>
      <img
        className="book_image"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.travian.com%2Fwp-content%2Fuploads%2F2015%2F06%2Ftravian-kingdoms-scout.jpg&f=1&nofb=1"
        alt="travian"
      />
    </div>
  );
};

// nested component
const Title = () => {
  return (
    <div>
      <h3>Title: Travian on the run</h3>
    </div>
  );
};

// nested component
const Author = () => {
  return (
    <div>
      <h3>Travian</h3>
    </div>
  );
};

export default Booklist;
