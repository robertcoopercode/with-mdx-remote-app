import { getAllPosts } from '../../utils/mdxUtils';

const Page = () => <div>Static page</div>;

export default Page;

export const getStaticPaths = () => {
  getAllPosts();
  return {
    paths: [
      {
        params: {
          slug: 'example'
        }
      }
    ],
    fallback: false
  }
}

export const getStaticProps = () => {
  getAllPosts();

  return {
    props: {}
  }
}