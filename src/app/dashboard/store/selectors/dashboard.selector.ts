import { DashboardState } from '..'
import { createFeatureSelector } from '@ngrx/store'

export const dashboardName = 'dashboard'

export const getDashboardState = createFeatureSelector<DashboardState>(
  dashboardName
)
