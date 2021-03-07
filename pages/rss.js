// import fs from 'fs';
// import { join } from 'path';
// import getConfig from 'next/config';
import { postFilePaths } from '../utils/mdxUtils';
// const { serverRuntimeConfig } = getConfig();
// const postsDirectory = join(String(serverRuntimeConfig.PROJECT_ROOT), 'posts');

const Page = () => <div>RSS page</div>;

export default Page;

export const getServerSideProps = (context) => {
  console.log(postFilePaths);
  return { props: {} };
}