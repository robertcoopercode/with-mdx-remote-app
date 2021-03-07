import fs from 'fs';
import { join } from 'path';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();
const postsDirectory = join(String(serverRuntimeConfig.PROJECT_ROOT), 'posts');

const Page = () => null;

export default Page;

export const getServerSideProps = (context) => {
  const res = context.res;
  const posts = fs.readdirSync(postsDirectory);
  console.log(posts);
  return { props: {} };
}