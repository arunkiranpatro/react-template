import React from 'react';
import Layout from './UILibrary/Layout';
import LoadingGif from './UILibrary/LoadingGif';

export default function SampleComponent() {
  return (
    <Layout columns="1">
      Hello Dynamic Container
      <LoadingGif />
    </Layout>
  );
}
