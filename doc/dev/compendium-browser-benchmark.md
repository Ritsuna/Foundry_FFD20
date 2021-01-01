# Before optimization

## Feature Browser

3519 total items

- 3076 ms
- 2981 ms
- 3007 ms
- 2980 ms
- 3033 ms
  - Average: 3015.4 ms

## Bestiary Browser

2269 total items

- 16667 ms
- 16529 ms
- 16692 ms
- 16509 ms
- 16430 ms
  - Average: 16565.4 ms

# After lazy image loading

The bestiary took noticably longer to load _with_ lazy image loading.

I presume this is because the bestiary only uses a couple of different images\
for each default entry, so there's not much lazy loading going on,\
and it does have some extra overhead. Not sure, though.

I think this might get more performant with more unique images for\
each entry, though.

## Feature Browser

3519 total items

- 2951 ms
- 3002 ms
- 2967 ms
- 2962 ms
- 3052 ms
  - Average: 2986.8 ms

## Bestiary Browser

2269 total items

- 18068 ms
- 18386 ms
- 18256 ms
- 18311 ms
- 18142 ms
  - Average: 18232.6 ms

# After loading packs simultaneously

At this point I split the bestiary compendium from one large file to 5\
separate files, with a maximum of 500 entries per file.

I also made the compendium browsers load all applicable packs\
simultaneously in separate async calls.

Lazy loading is still in effect.

## Feature Browser

3519 total items

- 2762 ms
- 2788 ms
- 2846 ms
- 2780 ms
- 2805 ms
  - Average: 2796.2 ms

## Bestiary Browser

2269 total items

- 16038 ms
- 15964 ms
- 16062 ms
- 16228 ms
- 15887 ms
  - Average: 16035.8 ms

# Fetch data only

Previously, compendium browsers used the Compendium.getContent method\
to fetch item data.

This resulted in lots of temporary items being created, rather than\
just the data being fetched, which was the only thing that was really\
needed.

Since this optimization, only the raw entry data is being gathered,\
and there have been some minor optimizations, like reducing the\
number of if statements in favor of switch statements and directly\
assigning values to variables.

While not at the level I was hoping for,\
this is a vast improvement over the previous benchmarks.

Note to future me: I may be able to squeeze just a bit more performance\
out if I make sure no unused data gets sent to Handlebars.

Another way of possibly performing better performance is by caching the\
results for each compendium browser in web storage, so that every\
subsequent opening (even after refreshes or OS reboots) will be quick.\
The user would only need to sit through a load time again if the\
compendium browser needs to be (manually) refreshed.

## Feature Browser

3519 total items

- 2167 ms
- 2099 ms
- 2159 ms
- 2173 ms
- 2190 ms
  - Average: 2157.6 ms

## Bestiary Browser

2269 total items

- 6866 ms
- 7022 ms
- 6928 ms
- 6901 ms
- 6931 ms
  - Average: 6929.6 ms
