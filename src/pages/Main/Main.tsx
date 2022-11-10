import Layout from "components/Layout";
import Navbar from "components/Navbar";
import Header from "components/Header";
import SearchForm from "components/Main/SearchForm";
import SearchItemList from "components/Main/SearchItemList";

const Main = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <Header />
        <SearchForm />
        <SearchItemList />
      </Layout>
    </>
  );
};

export default Main;
