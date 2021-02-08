import { ActionTree, ActionContext } from 'vuex'

import { State } from './state'
import { Mutations, Mutation } from './mutations'

export enum Action {
  initApp = 'initApp',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [Action.initApp]({ state, commit, dispatch }: AugmentedActionContext): void
}

export const actions: ActionTree<State, State> & Actions = {
  [Action.initApp]({ state, commit, dispatch }) {
    console.log('app inited!')
  },
}
