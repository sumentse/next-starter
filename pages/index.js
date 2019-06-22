import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

const Index = props => {

  return (
    <Layout>
      <h1>My Blog Test</h1>
      <ul>
        {props.shows.map(show => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
