// import fs from 'fs';
// import { join } from 'path';
// import getConfig from 'next/config';
import { getAllPosts, POSTS_PATH } from '../utils/mdxUtils';
// const { serverRuntimeConfig } = getConfig();
// const postsDirectory = join(String(serverRuntimeConfig.PROJECT_ROOT), 'posts');

// const Page = () => <div>RSS page</div>;
const Page = () => null;

export default Page;

export const getServerSideProps = async (context) => {
  console.log(getAllPosts());
  console.log(POSTS_PATH);
  return { props: {} };
}