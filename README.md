# Irish Carbon Budget Realtime Tracker
## Proof of Principle
### Barry McMullin

Caution: This is an experimental work-in-progress. Data shown is for test/illustration purposes only.

## Concept: Illustrative Pathways and Compliance Gap

+ "Indicative Compliance Pathway" [ICP] denotes an emissions
  pathway where the emissions level (tCO2e/s) declines linearly
  in time at just the right rate to exactly use up the approved
  budget over the full period 2021-2025. The starting emissions
  level is calibrated on the basis that, if the same pathway were
  extrapolated back for one year, the annual emissions level
  would match that of 2018 (nominal "pre-pandemic" level).
+ "Estimated Actual Pathway" [EAP] denotes an emissions pathway
  which is "piecewise linear" for each year of the budget
  period. The annual emissions level in each year matches the
  most recent EPA inventory where available, or otherwise the
  most recent EPA projections. For the first year (2021) the
  initial emissions level is interpolated as the mid-point
  between the annual inventory levels for 2020 and 2021. Within
  each year, the emissions level changes linearly to just match
  the required total annual emissions. The level at the end of
  each year then sets the initial level for the following
  year. left.
+ At any point in time during the budget period, if the
  cumulative amount of the EAP is above that of the ICP this
  difference (ΣEAP - ΣICP) is interpreted as an emerging budget
  excess or Compliance Gap. (Of course, if the cumulative EAP
  were to fall below the cumulative ICP this different would be
  negative and indicate an emerging budget surplus: happy days!).
+ For the moment we are showing the Compliance Gap denominated in
  tCO2e. It might equally (?) be denominated in percent of the
  available budget.
+ The idea of the [imagined - not yet implemented!] "gauge" chart
  is that if the pointer is centred ("12 o'clock", or 0 tCO2e or
  0% of the budget) then we are running exactly as per the
  "Indicative Compliance" pathway. If it moves into the area to
  the right (to be coloured red?) then a compliance gap is
  opening up. Conversely, moving into the left area (to be
  coloured green?)  would indicate a (prudential!) "compliance
  surplus" being built up.
+ The "full scale" amount is a bit arbitrary, but would be
  informed by the projected maximum overshoot for the full
  period. Thus, the full gauge might run from, say, -20% to +20%
  for CB1.
+ A separate or additional concept might be a gauge chart showing
  not the accumulative compliance gap but the rate at which that
  gap is increasing (or decreasing): i.e. are we still
  accelerating (relative to the "speed" that would comply with
  the budget) or are we at least beginning to apply the brakes?
