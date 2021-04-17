import './index.css';
const books = [
  {
    title: 'Travian title',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.travian.com%2Fwp-content%2Fuploads%2F2015%2F06%2Ftravian-kingdoms-scout.jpg&f=1&nofb=1',
    author: 'Mihai',
  },

  {
    title: 'Travian title 2',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.travian.com%2Fwp-content%2Fuploads%2F2015%2F06%2Ftravian-kingdoms-scout.jpg&f=1&nofb=1',
    author: 'Dixy',
  },
];
function Booklist() {
  return (
    <div className="booklist">
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </div>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.book.image} alt="" />
      <h1>{props.book.title}</h1>
      <h2>{props.book.author}</h2>
    </article>
  );
};

export default Booklist;
