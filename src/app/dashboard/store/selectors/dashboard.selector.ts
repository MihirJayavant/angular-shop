import { dashboardName } from '../store.name'
import { DashboardState } from '..'
import { createFeatureSelector } from '@ngrx/store'

export const getDashboardState = createFeatureSelector<DashboardState>(
  dashboardName
)
