import Head from 'next/head';

import { Header } from '../components/Header';
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Post/>
      <Post />
      <Post />
    </MainLayout>
  );
}
