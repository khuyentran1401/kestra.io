---
title: date
---

The `date` filter formats a date in a variety of formats. It can handle old-school `java.util.Date`,
Java 8 `java.time` constructs like `OffsetDateTime` and timestamps in milliseconds from the epoch.
The filter will construct a `java.text.SimpleDateFormat` or `java.time.format.DateTimeFormatter` using the provided
pattern and then use this newly created format to format the provided date object. If you don't provide a pattern,
either `DateTimeFormatter.ISO_DATE_TIME` or `yyyy-MM-dd'T'HH:mm:ssZ` will be used.

```twig
{{ user.birthday | date("yyyy-MM-dd") }}
```

An alternative way to use this filter is to use it on a string but then provide two arguments:
the first is the desired pattern for the output, and the second is the existing format used to parse the
input string into a `java.util.Date` object.
```twig
{{ "July 24, 2001" | date("yyyy-MM-dd", existingFormat="MMMM dd, yyyy") }}
```
The above example will output the following:
```twig
2001-07-24
```

## Time zones

If the provided date has time zone info (e.g. `OffsetDateTime`) then it will be used. If the provided date has no
time zone info, by default the system time zone will be used. If you need to use a specific
time zone then you can pass in a `timeZone` parameter any string that's understood by `ZoneId` / `ZoneInfo`:
```twig
{# the timeZone parameter will be ignored #}
{{ someOffsetDateTime | date("yyyy-MM-dd'T'HH:mm:ssX", timeZone="UTC") }}
{# the provided time zone will override the system default #}
{{ someInstant | date("yyyy-MM-dd'T'HH:mm:ssX", timeZone="Pacific/Funafuti") }}
```

## format & existingFormat
Format can be:
- [DateTimeFormatter](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html) format
- `iso` = `yyyy-MM-dd'T'HH:mm:ss.SSSSSSXXX`
- `iso_sec` = `yyyy-MM-dd'T'HH:mm:ssXXX`
- `sql` = `yyyy-MM-dd HH:mm:ss.SSSSSS`
- `sql_seq` = `yyyy-MM-dd HH:mm:ss`
- `iso_date_time`
- `iso_date`
- `iso_time`
- `iso_local_date`
- `iso_instant`
- `iso_local_date_time`
- `iso_local_time`
- `iso_offset_time`
- `iso_ordinal_date`
- `iso_week_date`
- `iso_zoned_date_time`
- `rfc_1123_date_time`

## Arguments
- `format`: the output format
- `existingFormat`: the input format if the based variable is a string
- `timeZone`:  the timezone to use
- `locale`: the locale to use