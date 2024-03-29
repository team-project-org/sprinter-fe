import { RouteProps } from "react-router-dom"

interface CustomRouteProps {
  title: string;
  hide: boolean;
  account: boolean;
}

export type RouteMetaProps = Omit<RouteProps, 'component'> & Partial<CustomRouteProps>;

export type RouteMetaType = string | RouteMetaProps;

export type RouterMetaTypes = { [key: string]: RouteMetaType | RouteMetaType[] };

const routerMeta: RouterMetaTypes = {
  Home: { path: '/' },
  Peer: { title: 'PEER 모집', path: '/peer' },
  NotionTest: { title: '노션 이력서', path: '/notion_test' },
  About: ['/about', '/test'],
  TestForm: { path: '/testform' },
  GraphqlTest: { path: '/graphql_test' },
}

export default routerMeta