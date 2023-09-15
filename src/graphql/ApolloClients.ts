import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { spacexPrefix, spacexURL } from '@/graphql/codegen/spacexConfig'
import { countiresPrefix, countriesURL } from '@/graphql/codegen/countriesConfig'
import { starWasPrefix, starWarsURL } from '@/graphql/codegen/starwarsConfig'
import { peerfundPrefix, peerfundURL } from '@/graphql/codegen/peerfundConfig'

const apolloClientGenerator = (uri: string) => new ApolloClient({ uri, cache: new InMemoryCache() });

const clientMap: {
  [key: string]: ApolloClient<NormalizedCacheObject>
} = {
  [spacexPrefix]: apolloClientGenerator(spacexURL),
  [countiresPrefix]: apolloClientGenerator(countriesURL),
  [starWasPrefix]: apolloClientGenerator(starWarsURL),
  [peerfundPrefix]: apolloClientGenerator(peerfundURL),
}

export default clientMap
