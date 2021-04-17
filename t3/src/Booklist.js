import './index.css';

const book2 = {
  title: 'Travian title 2',
  image:
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.travian.com%2Fwp-content%2Fuploads%2F2015%2F06%2Ftravian-kingdoms-scout.jpg&f=1&nofb=1',
  author: 'Dixy',
};

function Booklist() {
  return (
    <div className="booklist">
      {/* ONE WAY OF DOING IT */}
      <Book
        title="Travian title"
        image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.travian.com%2Fwp-content%2Fuploads%2F2015%2F06%2Ftravian-kingdoms-scout.jpg&f=1&nofb=1"
        author="Mihai"
      />
      {/* ONE WAY OF DOING IT */}
      <Book title={book2.title} image={book2.image} author={book2.author} />
    </div>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
    </article>
  );
};

export default Booklist;
