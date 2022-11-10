import Layout from "../../components/Layout";
import Header from "../../components/Header";
import SearchForm from "../../components/Main/SearchForm";
import SearchItemList from "../../components/Main/SearchItemList";

const Main = () => {
  return (
    <Layout>
      <Header />
      <SearchForm />
      <SearchItemList />
    </Layout>
  );
};

export default Main;
