import Head from 'next/head';

const Seo = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=7' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

Seo.defaultProps = {
  title: 'Next Jph',
  keywords: 'blogs,jsonplaceholder',
  description: 'Fetch posts by JsonPlaceholder API',
};

export default Seo;
