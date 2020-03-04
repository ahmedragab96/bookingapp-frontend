import React from 'react';
import { useQuery } from 'react-apollo';

export function useLazyQuery(query: any, options: any) {
  const ref: any = React.useRef()

  const [variables, runQuery] = React.useState(false)

  ref.current = useQuery(query, {
      ...options,
      variables,
      skip: !variables
  })

  const runner = (variables: any) => {
      runQuery(variables)
  }

  return [runner, ref.current];
}