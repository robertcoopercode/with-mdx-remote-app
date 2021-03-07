// import fs from 'fs';
// import { join } from 'path';
// import getConfig from 'next/config';
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils';
// const { serverRuntimeConfig } = getConfig();
// const postsDirectory = join(String(serverRuntimeConfig.PROJECT_ROOT), 'posts');

// const Page = () => <div>RSS page</div>;
const Page = () => null;

export default Page;

export const getServerSideProps = (context) => {
  console.log(postFilePaths);
  console.log(POSTS_PATH);
  return { props: {} };
}