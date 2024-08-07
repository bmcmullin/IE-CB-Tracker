# IE Carbon Budget Tracker(s)
## Development Roadmap (brainstorm)

+ Timestamp: 2024-08-06-16:33

+ Migrate parameter calcs from gsheets to localc (.ods)
    - Interim step: still pretty clumsy/unmaintainable. And
      suffers from TZ ineptitude of all (?) common spreadsheet
      tools.
	- [WIP] Need to check for formatting etc. across all sheets.
+ Add/fix static charts of pathways (and "excess") [DONE]
+ Add (fine tune!) plotly.js implementation of gauge chart!
+ Refactor daily and annual sheets (EAP, TRACKER) to use the
      "new", more direct EAP calculation.
+ Add deployment script (to twistylittlemaze.net for now)
+ Create github project!
+ Embeddable widget version?
+ Standardise *all* pathways as multi-annual linear segments
      (even when multiple segments are co-linear, as in ICP over
      5-years).
    - Refactor to single parameter csv file (combining ICP and
      EAP, now in "standardised" annual format).
+ Switch from discrete to continuous parameterisation?
+ Adjust "start-up" of EAP to use the same conceptual approach as
  for start-up of ICP: a single linear segment with two separate
  cumulative constraints (for ICP1 this is nominal "precursor
  year" referenced to 2018 level together with the budget period
  2021-2025; for EAP1 it is simply inventories for 2020 and
  2021).
+ Add WEM support for EAP. (Plain English? "optimistic" vs
  "prudential"? Though the latter is still a bit too generous to
  WEM...)
+ Generalise to 2030+
+ Migrate parameter calcs to python (jupyter notebook!)
    - Load the EPA spreadsheet data dynamically? Pity there isn't
      a proper API!
	- Make it as easy as possible to add new
      inventory/projections.
	- Allow for selecting inventory/projections years!
+ Add tracking for SECs? Implies (currently) tracking of
  "unallocated" emissions (difference between ΣSECs and
  budget(s)).
  
  
