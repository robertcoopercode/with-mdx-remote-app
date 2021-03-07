import { postFilePaths } from '../../utils/mdxUtils';

const Page = () => <div>Static page</div>;

export default Page;

export const getStaticPaths = () => {
  postFilePaths;
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
  postFilePaths;

  return {
    props: {}
  }
}