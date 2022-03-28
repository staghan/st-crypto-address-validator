const { freeze } = Object;

export const ScheduledJobsContainerSymbols = freeze({
  SynchronizeBalance: Symbol.for('scheduled-jobs-synchronize-balance'),
  Trader: Symbol.for('scheduled-jobs-trader'),
});
