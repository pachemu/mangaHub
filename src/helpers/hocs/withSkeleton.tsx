import Skeleton from '../../components/Skeleton/Skeleton.tsx';
import { ElementType } from 'react';

export interface SkeletonProps {
  isLoading: boolean;
  [key: string]: any;
}

interface Props {
  Component: ElementType;
  type: string;
  count: number;
}

function withSkeleton({ Component, type, count }: Props) {
  return function withSkeleton(props: SkeletonProps) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton count={count} type={type} />;
    }
    return <Component {...restProps} />;
  };
}

export default withSkeleton;
