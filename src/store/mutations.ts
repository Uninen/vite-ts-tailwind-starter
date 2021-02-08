import { MutationTree } from 'vuex'
import { State } from './state'

export enum Mutation {
  INCREMENT = 'INCREMENT',
}

export type Mutations<S = State> = {
  [Mutation.INCREMENT](state: S, payload: number): void
}

export const mutations: MutationTree<State> & Mutations = {
  [Mutation.INCREMENT](state: State, payload: number = 1) {
    state.count += payload
  },
}
