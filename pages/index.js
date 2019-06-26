import fetch from "isomorphic-unfetch";
import Layout from "../components/base/Layout";
import Link from "next/link";
import {connect} from "react-redux";

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

const mapStateToProps = (state)=>{
  return state;
}

export default connect(mapStateToProps)(Index);
