import * as Types from './baseTypes.generated'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type MemberFieldsFragment = {
  __typename: 'Member'
  id: string
  rootAccount: string
  controllerAccount: string
  handle?: Types.Maybe<string>
  name?: Types.Maybe<string>
  about?: Types.Maybe<string>
  avatarURI?: Types.Maybe<string>
  isFoundingMember: boolean
  isVerified: boolean
  inviteCount: any
}

export type BlockFieldsFragment = {
  __typename: 'Block'
  id: string
  height: any
  timestamp: any
  network: Types.Network
}

export type GetMembersQueryVariables = Types.Exact<{
  rootAccount_in?: Types.Maybe<Array<Types.Scalars['String']> | Types.Scalars['String']>
  controllerAccount_in?: Types.Maybe<Array<Types.Scalars['String']> | Types.Scalars['String']>
}>

export type GetMembersQuery = { __typename: 'Query'; members: Array<{ __typename: 'Member' } & MemberFieldsFragment> }

export type MemberWithDetailsFragment = {
  __typename: 'Member'
  registeredAtBlock: { __typename: 'Block' } & BlockFieldsFragment
  invitees?: Types.Maybe<Array<{ __typename: 'Member' } & MemberFieldsFragment>>
} & MemberFieldsFragment

export type GetMemberQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type GetMemberQuery = {
  __typename: 'Query'
  member?: Types.Maybe<{ __typename: 'Member' } & MemberWithDetailsFragment>
}

export type SearchMembersQueryVariables = Types.Exact<{
  text: Types.Scalars['String']
  limit?: Types.Maybe<Types.Scalars['Int']>
}>

export type SearchMembersQuery = {
  __typename: 'Query'
  searchMembers: Array<{ __typename: 'Member' } & MemberFieldsFragment>
}

export const MemberFieldsFragmentDoc = gql`
  fragment MemberFields on Member {
    id
    rootAccount
    controllerAccount
    handle
    name
    about
    avatarURI
    isFoundingMember
    isVerified
    inviteCount
  }
`
export const BlockFieldsFragmentDoc = gql`
  fragment BlockFields on Block {
    id
    height
    timestamp
    network
  }
`
export const MemberWithDetailsFragmentDoc = gql`
  fragment MemberWithDetails on Member {
    ...MemberFields
    registeredAtBlock {
      ...BlockFields
    }
    invitees {
      ...MemberFields
    }
  }
  ${MemberFieldsFragmentDoc}
  ${BlockFieldsFragmentDoc}
`
export const GetMembersDocument = gql`
  query GetMembers($rootAccount_in: [String!], $controllerAccount_in: [String!]) {
    members(where: { rootAccount_in: $rootAccount_in, controllerAccount_in: $controllerAccount_in }) {
      ...MemberFields
    }
  }
  ${MemberFieldsFragmentDoc}
`

/**
 * __useGetMembersQuery__
 *
 * To run a query within a React component, call `useGetMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembersQuery({
 *   variables: {
 *      rootAccount_in: // value for 'rootAccount_in'
 *      controllerAccount_in: // value for 'controllerAccount_in'
 *   },
 * });
 */
export function useGetMembersQuery(baseOptions?: Apollo.QueryHookOptions<GetMembersQuery, GetMembersQueryVariables>) {
  return Apollo.useQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, baseOptions)
}
export function useGetMembersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMembersQuery, GetMembersQueryVariables>
) {
  return Apollo.useLazyQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, baseOptions)
}
export type GetMembersQueryHookResult = ReturnType<typeof useGetMembersQuery>
export type GetMembersLazyQueryHookResult = ReturnType<typeof useGetMembersLazyQuery>
export type GetMembersQueryResult = Apollo.QueryResult<GetMembersQuery, GetMembersQueryVariables>
export const GetMemberDocument = gql`
  query GetMember($id: ID!) {
    member(where: { id: $id }) {
      ...MemberWithDetails
    }
  }
  ${MemberWithDetailsFragmentDoc}
`

/**
 * __useGetMemberQuery__
 *
 * To run a query within a React component, call `useGetMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemberQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMemberQuery(baseOptions: Apollo.QueryHookOptions<GetMemberQuery, GetMemberQueryVariables>) {
  return Apollo.useQuery<GetMemberQuery, GetMemberQueryVariables>(GetMemberDocument, baseOptions)
}
export function useGetMemberLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMemberQuery, GetMemberQueryVariables>
) {
  return Apollo.useLazyQuery<GetMemberQuery, GetMemberQueryVariables>(GetMemberDocument, baseOptions)
}
export type GetMemberQueryHookResult = ReturnType<typeof useGetMemberQuery>
export type GetMemberLazyQueryHookResult = ReturnType<typeof useGetMemberLazyQuery>
export type GetMemberQueryResult = Apollo.QueryResult<GetMemberQuery, GetMemberQueryVariables>
export const SearchMembersDocument = gql`
  query SearchMembers($text: String!, $limit: Int) {
    searchMembers(text: $text, limit: $limit) {
      ...MemberFields
    }
  }
  ${MemberFieldsFragmentDoc}
`

/**
 * __useSearchMembersQuery__
 *
 * To run a query within a React component, call `useSearchMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMembersQuery({
 *   variables: {
 *      text: // value for 'text'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchMembersQuery(
  baseOptions: Apollo.QueryHookOptions<SearchMembersQuery, SearchMembersQueryVariables>
) {
  return Apollo.useQuery<SearchMembersQuery, SearchMembersQueryVariables>(SearchMembersDocument, baseOptions)
}
export function useSearchMembersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SearchMembersQuery, SearchMembersQueryVariables>
) {
  return Apollo.useLazyQuery<SearchMembersQuery, SearchMembersQueryVariables>(SearchMembersDocument, baseOptions)
}
export type SearchMembersQueryHookResult = ReturnType<typeof useSearchMembersQuery>
export type SearchMembersLazyQueryHookResult = ReturnType<typeof useSearchMembersLazyQuery>
export type SearchMembersQueryResult = Apollo.QueryResult<SearchMembersQuery, SearchMembersQueryVariables>