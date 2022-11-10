import Layout from "../../components/Layout";
import Header from "../../components/Header";
import SearchForm from "../../components/Main/SearchForm";
import SearchItemList from "../../components/Main/SearchItemList";
import Navbar from "../../components/Navbar";

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
