import * as React from 'react';
import { CATEGORIES } from '../component/graphql/categories';
import { useQuery } from '@apollo/client';

export default function HomePage(): React.ReactElement {
  const cd = useQuery(CATEGORIES);
  console.log(cd);
  return <>Changed</>;
}
